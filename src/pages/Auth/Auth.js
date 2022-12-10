import { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auto() {
  const navigator = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [validation, setValidation] = useState(false);

  // 이메일 유효성 검사
  const emailValidation = (item) => {
    let email = item.target.value;
    setUser({ ...user, email: email });
    if ([...email].includes("@") && email !== "") {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  // 비밀번호 유효성 검사
  const pwValidation = (item) => {
    let pw = item.target.value;
    setUser({ ...user, password: pw });
    if (pw.length >= 8) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  // const submitBtn =

  return (
    <div>
      <Tabs defaultActiveKey="0" transition={false} id="noanim-tab-example" className="mb-3">
        <Tab eventKey="0" title="로그인">
          {" "}
          <div>
            <form>
              <span>이메일</span>
              <input type="email" className="email" placeholder="이메일을 입력하세요" onChange={emailValidation} />
              <br />
              <span>비밀번호</span>
              <input type="password" className="pw" autoComplete="off" placeholder="비밀번호를 입력하세요" onChange={pwValidation} />
              <br />
              <br />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  axios.post("https://pre-onboarding-selection-task.shop/auth/signin", user).then(function (res) {
                    console.log(res.data);
                    // let access_token = res.data;
                    navigator("/todo");
                  });
                  // .catch(function (error) {
                  //   alert("로그인 정보가 틀렸습니다.");
                  // });
                }}
              >
                로그인
              </button>
            </form>
          </div>
        </Tab>
        <Tab eventKey="1" title="회원가입">
          {" "}
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                axios
                  .post("https://pre-onboarding-selection-task.shop/auth/signup", user)
                  .then(function (res) {
                    let access_token = res.data;
                    localStorage.setItem("token", JSON.stringify(access_token));
                    alert("회원가입이 완료되었습니다.");
                    // let jsonData = localStorage.getItem("token");
                    // console.log(JSON.parse(jsonData));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              <span>이메일</span>
              <input type="email" className="email" placeholder="이메일을 입력하세요" onChange={emailValidation} />
              <br />
              <span>비밀번호</span>
              <input type="password" className="pw" autoComplete="off" placeholder="비밀번호를 입력하세요" onChange={pwValidation} />
              <br />
              <br />
              <button type="submit">회원가입</button>
            </form>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Auto;

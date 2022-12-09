function SignUp(props) {
  const checkEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(e.target.value) === false) alert("이메일 형식을 지켜주세요");
  };
  return (
    <div>
      <h2>SignUp</h2>
      <span>Email</span>
      <input type="email" placeholder="이메일을 입력하세요" onBlur={checkEmail} />
      <br />
      <span>PW</span>
      <input type="text" placeholder="비밀번호를 입력하세요" />
      <br />
      <button>SUBMIT</button>
    </div>
  );
}

export default SignUp;

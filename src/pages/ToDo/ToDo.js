import { useCallback, useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (text) => {
    text.preventDefault();
    console.log(text.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="todo를 입력하세요" onChange={onChange} />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default Todo;

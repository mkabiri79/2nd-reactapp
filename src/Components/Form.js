import styles from "./Form.module.css";
import { useState } from "react";

const Form = (props) => {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });

  const usernameChangeHandler = (e) => {
    setUser((preState) => {
      return {
        ...preState,
        username: e.target.value,
      };
    });
  };
  const ageChangeHandler = (e) => {
    setUser((preState) => {
      return {
        ...preState,
        age: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (user.age.trim().length === 0 || user.username.trim().length === 0) {
      props.validation({
        value: 1,
        title: "Invalid input",
        message: "Please enter a valid username and age",
      });
      return;
    }
    if (+user.age < 1) {
      props.validation({
        value: 1,
        title: "Invalid age",
        message: "Please enter a valid age",
      });

      return;
    }

    props.onAddUser(user);
    setUser((preState) => {
      return {
        username: "",
        age: "",
      };
    });
  };
  return (
    <form onSubmit={submitHandler} className={styles["form"]}>
      <div>
        <label>Username:</label>
        <input
          value={user.username}
          onChange={usernameChangeHandler}
          type="text"
        />
      </div>
      <div>
        <label>Age:</label>
        <input value={user.age} onChange={ageChangeHandler} type="number" />
      </div>
      <button>Add User</button>
    </form>
  );
};
export default Form;

import React, { useState } from "react";
import styles from "./App.module.css";
import Form from "./Components/Form";
import List from "./List/List";
import Modal from "./Components/Modal";
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState({
    value: "",
    title: "",
    message: "",
  });
  const addUser = (user) => {
    user.id = Math.random().toString();
    setData((preState) => {
      const updatedDate = [...preState];
      updatedDate.unshift(user);
      console.log(updatedDate);
      return updatedDate;
    });
  };
  const deleteUser = (id) => {
    setData((preState) => {
      const updatedDate = preState.filter((user) => user.id !== id);
      // console.log(updatedDate);
      return updatedDate;
    });
  };
  const errorHandle = (e) => {
    // console.log(e);

    setError(e);
  };
  const onCloseModal = () => {
    setError("");
  };
  return (
    <section id={styles["section-form"]}>
      <div className={`${styles["form"]} `}>
        <Form validation={errorHandle} onAddUser={addUser}></Form>
        <List data={data} onDeleteUser={deleteUser}></List>
      </div>
      <Modal
        closeModal={onCloseModal}
        value={error.value}
        title={error.title}
        message={error.message}
      />
    </section>
  );
}

export default App;

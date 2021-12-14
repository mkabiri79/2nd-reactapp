import { useState } from "react";
import styles from "./Modal.module.css";
const Modal = (props) => {
  const closeModal = () => {
    props.closeModal();
  };
  // console.log(props);

  return (
    <div className={props.value === 1 ? "" : "hidden"}>
      <div className={styles["modal"]}>
        <button onClick={closeModal} className={styles["modal-close"]}>
          &times;
        </button>
        <p className={styles["modal-title"]}>{props.title}</p>
        <p className={styles["modal-text"]}>{props.message}</p>
      </div>
      <div onClick={closeModal} className={`${styles["overlay"]}`}></div>
    </div>
  );
};
export default Modal;

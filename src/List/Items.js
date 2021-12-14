import styles from "./Items.module.css";
const Items = (props) => {
  const deleteHandler = () => {
    // console.log(props.id);

    props.onDeleteItems(props.id);
  };
  return (
    <div className={`${styles["list-item"]} `} onClick={deleteHandler}>
      <p>
        {props.username} ({props.age} years old)
      </p>
    </div>
  );
};
export default Items;

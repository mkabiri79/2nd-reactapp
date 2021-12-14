import styles from "./List.module.css";
import Items from "./Items";
const List = (props) => {
  // console.log(props);

  return (
    <div className={styles["list"]}>
      {props.data.map((user) => {
        return (
          <Items
            username={user.username}
            age={user.age}
            key={user.id}
            onDeleteItems={props.onDeleteUser}
            id={user.id}
          />
        );
      })}
    </div>
  );
};
export default List;

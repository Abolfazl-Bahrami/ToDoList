import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = (props) => {
  return (
    <div>
      <h1>{props.course.courseName}</h1>
      <button
        onClick={() => {
          props.deletcoourse(props.course.id);
        }}
      >
        <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
      </button>
      <button onClick={() => props.checkfortodo(props.course.id)}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  );
};

export default List;

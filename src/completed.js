import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoneCourse = (props) => {
  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faCheckCircle} /> {props.course.courseName}
      </h2>
      <h5>✅ Completed at: {props.course.completedAt}</h5>
    </div>
  );
};

export default DoneCourse;

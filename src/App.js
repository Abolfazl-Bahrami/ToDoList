import { useState } from "react";
import "./App.css";

import List from "./list";
import DoneCourse from "./completed";

function App() {
  const [newCourseLList, setNewCourseList] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [done, setDone] = useState([]);

  const course = {
    id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
    courseName: newCourseLList,
  };

  const deletcoourse = (courseid) => {
    const todolist = courseList.filter((id) => id.id != courseid);
    setCourseList(todolist);
  };

  const checkfortodo = (courseid) => {
    const selectedCourse = courseList.find((course) => course.id === courseid);
    const updatedList = courseList.filter((course) => course.id !== courseid);
    setCourseList(updatedList);

    const completCourse = {
      courseName: selectedCourse.courseName,
      completedAt: new Date().toLocaleString("fa-IR"),
    };
    setDone([...done, completCourse]);
  };

  return (
    <div className="App">
      <div className="two">
        <div className="add-course">
          <input
            className="input"
            type="text"
            onChange={(event) => setNewCourseList(event.target.value)}
          />
          <button
            className="button"
            onClick={() => setCourseList([...courseList, course])}
          >
            add course
          </button>
        </div>
        <div className="list">
          {courseList.map((course, index) => {
            return (
              <List
                key={index}
                course={course}
                deletcoourse={deletcoourse}
                checkfortodo={checkfortodo}
              />
            );
          })}
        </div>
      </div>
      <div className="solid"></div>
      <h1>comepleted</h1>
      <div className="done-course">
        {done.map((course, index) => {
          return <DoneCourse course={course} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import PropTypes from "prop-types";

import "./TaskList.css";
import { FaTasks } from "react-icons/fa";
import TaskComponent from "../TaskComponent/TaskComponent";

const TaskList = ({ tasks, callFunction }) => {
  return (
    <section className="tasks-list-section gray-container">
      <section className="mb-3">
        <h3>
          <FaTasks /> Tasks
        </h3>
      </section>
      <section>{tasks && tasks.map((value, index) => <TaskComponent key={index} task={value} callFunction={callFunction} />)}</section>
    </section>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  callFunction: PropTypes.func.isRequired,
};

export default TaskList;

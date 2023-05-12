import React from "react";
import PropTypes from "prop-types";

import "./TaskComponent.css";
import { BsDot } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { IoCheckmarkDone } from "react-icons/io5";
import { CgPlayListRemove } from "react-icons/cg";
import { MdOutlineRemoveDone } from "react-icons/md";
import { removeData, updateData } from "../../core/localStorage";

const TaskComponent = ({ task, callFunction }) => {
  const favorite_func = () => {
    task.isFav = !task.isFav;
    updateData(+task.id, task);
    callFunction();
  };

  const remove_func = () => {
    removeData(task.id);
    callFunction();
  };

  const mark_func = () => {
    task.isFinished = !task.isFinished;
    updateData(+task.id, task);
    callFunction();
  };

  return (
    <section className="task-component-div card w-100 mb-2">
      <section className="card-body">
        <h5 className={task.isFinished ? "text-decoration-line-through card-title mb-2" : "card-title mb-2"}>{task.activityName}</h5>
        <p className={task.isFinished ? "text-decoration-line-through card-text mb-1 fst-italic" : "card-text mb-1 fst-italic"}>{task.description}</p>
        <p className={task.isFinished ? "text-decoration-line-through card-text mb-1" : "card-text mb-1"}>
          Dead Line <BsDot />
          {task.deadLine}
        </p>
        <section className="task-component-btns">
          <button className="btn" onClick={favorite_func}>
            {task.isFav ? <AiFillHeart className="text-danger" /> : <FiHeart className="text-secondary" />}
          </button>
          <button className="btn" type="button" onClick={mark_func}>
            {task.isFinished ? (
              <span>
                UnMark <MdOutlineRemoveDone />
              </span>
            ) : (
              <span>
                Mark <IoCheckmarkDone />
              </span>
            )}
          </button>
          <button className="btn" type="button" onClick={remove_func}>
            Delete <CgPlayListRemove />
          </button>
        </section>
      </section>
    </section>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.object.isRequired,
  callFunction: PropTypes.func.isRequired,
};

export default TaskComponent;

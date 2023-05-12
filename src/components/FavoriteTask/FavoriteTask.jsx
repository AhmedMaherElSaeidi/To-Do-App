import React from "react";
import PropTypes from "prop-types";
import { updateData } from "../../core/localStorage";

import "./FavoriteTask.css";
import { BsDot } from "react-icons/bs";
import { MdOutlineFavorite, MdOutlineDoneAll, MdOutlineRemoveDone } from "react-icons/md";

const FavoriteTask = ({ favorite_Task, callFunction }) => {
  const favorite_func = () => {
    favorite_Task.isFav = !favorite_Task.isFav;
    updateData(+favorite_Task.id, favorite_Task);
    callFunction();
  };

  return (
    <section className="task-card card w-100 mb-2">
      <span className="react-icon" onClick={favorite_func}>
        <MdOutlineFavorite />
      </span>
      <section className="card-body">
        <h5 className="card-title mb-2">{favorite_Task.activityName}</h5>
        <p className="card-text mb-1 fst-italic">{favorite_Task.description}</p>
        <p className="card-text mb-1">
          Dead Line <BsDot /> {favorite_Task.deadLine}
        </p>
      </section>
      <section className="text-center p-2">
        {favorite_Task.isFinished && (
          <span className="btn btn-success col-5 disabled">
            Finished <MdOutlineDoneAll />
          </span>
        )}
        {!favorite_Task.isFinished && (
          <span className="btn btn-warning col-5 disabled">
            Un Finished <MdOutlineRemoveDone />
          </span>
        )}
      </section>
    </section>
  );
};

FavoriteTask.propTypes = {
  favorite_Task: PropTypes.object.isRequired,
  callFunction: PropTypes.func.isRequired,
};

export default FavoriteTask;

import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { setData } from "../../core/localStorage";

import "./TaskForm.css";
import { BiTask } from "react-icons/bi";
import { MdDoneAll } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { GoPrimitiveDot } from "react-icons/go";
import { BsFillCalendarDateFill } from "react-icons/bs";

const TaskForm = ({ submit_event }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (submit_data) => {
    submit_data = { id: Math.ceil(Math.random() * 1e10 + 1), ...submit_data, isFav: false };
    setData(submit_data);
    submit_event();
    alert(`Task with id of ${submit_data.id} was submitted successfully.`);
    reset();
  };

  return (
    <section className="div-task-form gray-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="form-header">
          <h3>
            <BiTask /> Task Form
          </h3>
        </section>

        <section className="form-control-container mb-2">
          <FiActivity className="react-icon" />
          <input type="text" className="form-control" placeholder="Activity Name" {...register("activityName", { required: true })} />
        </section>
        {errors.activityName && (
          <span className="text-danger d-block mb-1">
            <GoPrimitiveDot /> Activity Name field is required
          </span>
        )}

        <section className="form-control-container mb-2">
          <CgDetailsMore className="react-icon" />
          <textarea type="text" className="form-control" placeholder="Description" {...register("description", { required: true })} />
        </section>
        {errors.description && (
          <span className="text-danger d-block mb-1">
            <GoPrimitiveDot /> Description field is required
          </span>
        )}

        <section className="form-control-container mb-2">
          <BsFillCalendarDateFill className="react-icon" />
          <input type="date" className="form-control" placeholder="Dead line" {...register("deadLine", { required: true })} />
        </section>
        {errors.deadLine && (
          <span className="text-danger d-block mb-1">
            <GoPrimitiveDot /> Dead line field is required
          </span>
        )}

        <section className="form-submit">
          <section className="form-check mb-2">
            <label htmlFor="isDoneCheck" className="form-check-lable fw-bold">
              Activity Done <MdDoneAll />
            </label>
            <input type="checkbox" id="isDoneCheck" className="form-check-input" {...register("isFinished")} />
          </section>
          <button type="submit" className="btn btn-secondary col-5">
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};

TaskForm.propTypes = {
  submit_event: PropTypes.func.isRequired,
};

export default TaskForm;

import { getData } from "../core/localStorage";
import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import FavoriteTasks from "../components/FavoriteTasks/FavoriteTasks";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [tasks, setTasks] = useState({
    loading: true,
    tasks: [],
    err: false,
    changes: false,
  });

  const render_components = () => setTasks({ ...tasks, changes: !tasks.changes });

  useEffect(() => {
    setTasks({ ...tasks, tasks: getData() });
  }, [tasks.changes]);

  return (
    <section className="todo-container">
      <NavBar />
      <section>
        <section>
          <TaskForm submit_event={render_components} className="home-task-form" />
          <FavoriteTasks favorites={(tasks.tasks && tasks.tasks.filter((t) => t.isFav)) || []} callFunction={render_components} className="home-favorite-tasks" />
        </section>
        <section>
          <TaskList tasks={tasks.tasks || []} callFunction={render_components} className="home-task-list" />
          <Footer className="home-footer" />
        </section>
      </section>
    </section>
  );
};

export default Home;

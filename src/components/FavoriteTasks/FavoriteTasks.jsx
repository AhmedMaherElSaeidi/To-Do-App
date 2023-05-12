import React from "react";
import PropTypes from "prop-types";
import FavoriteTask from "../FavoriteTask/FavoriteTask";

import "./FavoriteTasks.css";
import { MdOutlineFavorite } from "react-icons/md";

const FavoriteTasks = ({ favorites, callFunction }) => {
  return (
    <section className="gray-container section-favorites">
      <section className="text-center mb-3">
        <h3>
          <MdOutlineFavorite className="text-danger" /> Favorite Tasks
        </h3>
      </section>
      <section>{favorites && favorites.map((fav, index) => <FavoriteTask key={index} favorite_Task={fav} callFunction={callFunction}/>)}</section>
    </section>
  );
};

FavoriteTasks.propTypes = {
  favorites: PropTypes.array.isRequired,
  callFunction: PropTypes.func.isRequired,
};

export default FavoriteTasks;

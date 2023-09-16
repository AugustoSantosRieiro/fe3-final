import { useContext, useReducer, useState } from "react";
import doc from "../images/doctor.jpg";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, website, phone, email }) => {
  const { addToStorage } = useContext(ContextGlobal);

  const exists = (id) => {
    const initialState = JSON.parse(localStorage.getItem("dentists")) || [];

    return initialState.some((dent) => dent.id === id);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        break;

      case "remove":
        break;
      default:
        return state;
    }
  };

  const addFav = () => {
    addToStorage({ id });
  };
  
  return (
    <div className="card">
      <img style={{ width: "120px" }} src={doc} alt="" />
      <h3>{name}</h3>
      <h3>{username}</h3>
      {email && phone && website && (
        <div>
          <h5>{email}</h5>
          <h5>{phone}</h5>
          <h5>{website}</h5>
        </div>
      )}
      <h5>{id}</h5>

      {!exists(id) ? (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      ) : (
        <button onClick={() => {}} className="favButton">
          remove fav
        </button>
      )}
    </div>
  );
};

export default Card;

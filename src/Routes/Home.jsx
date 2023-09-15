import React, { useContext, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Home = () => {
  
  const { providerValues } = useContext(ContextGlobal);
  const { data } = providerValues.state;

  return (
    <>
      <h1>Inicio</h1>
      <div className="card-grid">

        {data.map((dentist) => (
          <Link style={{color:'black'}} to={`/dentista/${dentist.id}`}>
          <Card
            key={dentist.name}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

import s from "./CarsActivity.module.css";

import React from "react";
import { useSelector } from "react-redux";

import CardActivity from "../CardActivity/CardActivity";
function CardsActivity() {
  const allActivity = useSelector((state) => state.activities);
  if (allActivity.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={s.divContainer}>
      {allActivity.map((c, index) => {
        return (
          <div key={index} className={s.divCards}>
            <CardActivity
              name={c.name}
              difficulty={c.difficulty}
              duration={c.duration}
              season={c.season}
              Countries={c.Countries}
              id={c.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardsActivity;

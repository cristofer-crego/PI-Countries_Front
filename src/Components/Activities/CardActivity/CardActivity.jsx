//css
import s from "./CardActivity.module.css";
//imports library
import React from "react";
import { useDispatch } from "react-redux";

//imports components
import { deleteAct } from "../../../Redux/Actions";

function CardActivity({ name, difficulty, duration, season, Countries, id }) {
  const RenderCountries = () => {
    if (Countries) {
      if (Countries.length === 1) {
        return <li>{Countries[0].id}</li>;
      } else if (Countries.length > 1) {
        return (
          <>
            {Countries.map((count) => (
              <li key={count.id}>{count.id}</li>
            ))}
          </>
        );
      }
    }
  };
  const dispatch = useDispatch();
  const onclose = () => {
    dispatch(deleteAct(id));
  };
  return (
    <div className={s.parent}>
      <div className={s.card}>
        <div className={s.glass}></div>
        <div className={s.content}>
          <h1>Nombre:{name}</h1>
          <h3>Dificultad:{difficulty}</h3>
          <h3>Duracion:{duration}</h3>
          <h3>Temporada:{season}</h3>
          <ul>{RenderCountries()}</ul>
          <h3>Id:{id}</h3>
        </div>
        <div className={s.bottom}>
          <div className={s.socialButtonsContainer}>
            <button onClick={onclose} className={s.socialButton}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardActivity;
<div class="parent">
  <div class="card">
    <div class="glass"></div>
    <div class="content">
      <span class="title">UIVERSE (3D UI)</span>
    </div>
    <div class="bottom">
      <div class="social-buttons-container">
        <button class="social-button "></button>
      </div>
    </div>
  </div>
</div>;

import s from "./FilterComponent.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActivity, filterCont } from "../../../Redux/Actions";
import RenderOptionActivity from "../../RenderOptionActivity";

export default () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [optionActivty, setOptionActivity] = useState("");
  const [optionContinents, setOptionContinents] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };
  const ChangeActivity = (event) => {
    setOptionActivity(event.target.value);
  };
  const ChangeContinents = (event) => {
    setOptionContinents(event.target.value);
  };
  const handleFilter = () => {
    switch (opcionSeleccionada) {
      case "Activity":
        dispatch(filterActivity(optionActivty));
        setOpcionSeleccionada("");
        break;
      case "Continents":
        dispatch(filterCont(optionContinents));
        setOpcionSeleccionada("");
        break;
      default:
        window.alert("Selecciona una opción válida");
    }
  };

  return (
    <div>
      <p>Filtrar por:</p>
      <select
        id="countryActivity"
        onChange={handleFilterChange}
        value={opcionSeleccionada}
        className={s.counAct}
      >
        <option value=""></option>
        <option value="Continents">Continentes</option>
        <option value="Activity">Actividades</option>
      </select>

      {opcionSeleccionada === "Continents" && (
        <select
          name="continentSelect"
          id="continentSelect"
          onChange={ChangeContinents}
        >
          <option> </option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Antarctica">Antartica</option>
        </select>
      )}

      {opcionSeleccionada === "Activity" && (
        <select
          name="activitySelect"
          id="activitySelect"
          onChange={ChangeActivity}
        >
          <option> </option>
          <RenderOptionActivity />
        </select>
      )}
      <button onClick={handleFilter} className={s.btnFilter}>
        Filtrar
      </button>
    </div>
  );
};

import s from "./Order.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  orderCountriesAlfa,
  orderCountriesPoblation,
} from "../../../Redux/Actions";

export default () => {
  const [orderAlfa, setOrderAlfa] = useState("");
  const [orderPoblacion, setOrderPoblacion] = useState("");
  let dispatch = useDispatch();

  const handleOrderChangeAlfa = (event) => {
    setOrderAlfa(event.target.value);
  };
  const handleOrderChangePoblacion = (event) => {
    setOrderPoblacion(event.target.value);
  };

  const onClickAlfa = () => {
    dispatch(orderCountriesAlfa(orderAlfa));
    setOrderAlfa("");
  };
  const onClickPoblacion = () => {
    dispatch(orderCountriesPoblation(orderPoblacion));
    setOrderPoblacion("");
  };
  return (
    <div>
      <p>Ordenar Alfabeticamente:</p>
      <select name="AscDesc" value={orderAlfa} onChange={handleOrderChangeAlfa}>
        <option></option>
        <option value="A">A - Z</option>
        <option value="D">Z - A</option>
      </select>
      <button onClick={onClickAlfa} className={s.btnOrder}>
        Ordenar
      </button>

      <div className={s.divDivisor}>
        <p className={s.p}>Ordenar por Cantidad de Poblacion:</p>
        <select
          name="AscDesc"
          value={orderPoblacion}
          onChange={handleOrderChangePoblacion}
          className={s.select}
        >
          <option></option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <button onClick={onClickPoblacion} className={s.btnOrder1}>
          Ordenar
        </button>
      </div>
    </div>
  );
};

import s from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ name, continents, flags, population, id }) => {
  if (!id) {
    return (
      <div className={s.divP}>
        <p>No existen paises.</p>
      </div>
    );
  }
  return (
    <div className={s.card}>
      <Link to={`detail/${id}`}>
        <img src={flags} alt="" className={s.img} />
      </Link>
      <div className={s.details}>
        <h2 className={s.name}>Nombre: {name}</h2>
        <h2 className={s.continent}>Continente: {continents}</h2>
        <h2 className={s.population}>Poblacion: {population}</h2>
      </div>
    </div>
  );
};
export default Card;

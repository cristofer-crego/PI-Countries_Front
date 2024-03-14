import s from "./DetailPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addForId } from "../../Redux/Actions";

const DetailPage = () => {
  const ID = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addForId(ID.id));
  }, []);

  const countriesID = useSelector((state) => state.countriesID[0]);

  const isLoading = !countriesID;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const {
    name,
    id,
    continents,
    flags,
    capital,
    subregion,
    area,
    population,
    Activities,
  } = countriesID;
  console.log(countriesID.capital);
  const renderActivities = () => {
    return (
      <div>
        <h1>Actividades</h1>
        {Activities.length > 0 ? (
          Activities.map((activity, index) => (
            <div key={index}>
              <li>
                <h2 className={s.nameActivity}>{activity.name}</h2>
                <h2>
                  <span className={s.span}> Dificultad: </span>
                  {activity.difficulty}
                </h2>

                <h2>
                  <span className={s.span}> Duracion: </span>
                  {activity.duration}
                </h2>
                <h2>
                  <span className={s.span}> Temporada: </span>
                  {activity.season}
                </h2>
              </li>
            </div>
          ))
        ) : (
          <p>No cuenta con actividades disponibles.</p>
        )}
      </div>
    );
  };
  console.log(Activities);
  return (
    <div>
      <NavLink to={"/home"}>
        <button className={s.btnBack}>BACK</button>
      </NavLink>
      <div className={s.divContainerCountry}>
        <h1 className={s.name}>{name}</h1>
        <h3 className={s.id}>
          <span className={s.span}> id: </span>
          {id}
        </h3>
        <h3 className={s.continent}>
          <span className={s.span}> Continente: </span>
          {continents}
        </h3>
        <img src={flags} alt="" className={s.img} />
        <h3 className={s.capital}>
          <span className={s.span}> Capital: </span>
          {capital}
        </h3>
        <h3 className={s.subregion}>
          <span className={s.span}> Subregion: </span>
          {subregion}
        </h3>
        <h3 className={s.area}>
          <span className={s.span}> Area: </span>
          {area}
        </h3>
        <h3 className={s.population}>
          <span className={s.span}> Poblacion: </span> {population}
        </h3>
      </div>
      <div className={s.divContainerActivity}>
        <ol>{Activities && renderActivities()}</ol>
      </div>
    </div>
  );
};

export default DetailPage;

//imports css
import s from "./LandingPage.module.css";

//imports libraries
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addAct, addCount } from "../../Redux/Actions";

const LandingPage = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCount());
    dispatch(addAct());
  });
  return (
    <div className={s.div}>
      <div className={s.divContainer}>
        <h1 className={s.h1}>Bienvenidos</h1>
        <h3 className={s.texto}>
          Aqui podrán conocer diferentes paises y sus respectivas actividades,
          en el cual tambien podrán agregar dichas actividades a sus respectivos
          paises.
        </h3>
        <NavLink to={"/home"}>
          <button className={s.btn}>Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;

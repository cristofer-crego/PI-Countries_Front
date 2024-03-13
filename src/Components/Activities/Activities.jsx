//imports css
import s from "./Activities.module.css";

//imports library
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addAct } from "../../Redux/Actions";

//imports components
import FormPage from "./FormPage/FormPage";
import CardsActivity from "./CardsActivity/CardsActivity";

function Activities() {
  const dispatch = useDispatch();
  const validator = useSelector((state) => state.validator);
  const allActivity = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(addAct());
  }, [validator]);
  return (
    <div>
      <NavLink to={"/home"}>
        <button className={s.btn}>Back</button>
      </NavLink>
      <div className={s.divCards}>
        {allActivity.length > 0 && <CardsActivity />}
      </div>
      <div className={s.divForm}>
        <FormPage />
      </div>
    </div>
  );
}

export default Activities;

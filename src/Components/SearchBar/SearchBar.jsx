import s from "./SearchBar.module.css";
import { Cards } from "../Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addForname, btnAll } from "../../Redux/Actions.js";

const SearchBar = () => {
  const [id, setId] = useState("");
  let dispatch = useDispatch();
  let allcountries = useSelector((state) => state.allcountries);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = () => {
    dispatch(addForname(id));
    document.getElementById("inputSearch").value = "";
  };
  const onClick = () => {
    dispatch(btnAll(allcountries));
  };
  return (
    <div>
      <div className={s.divContainer}>
        <div className={s.InputContainer}>
          <input
            id="inputSearch"
            type="search"
            placeholder="buscar por Pais"
            onChange={handleChange}
            className={s.input}
          />
        </div>
        <button onClick={handleClick} className={s.btnSearch}>
          Buscar
        </button>
        <button onClick={onClick} className={s.btnAll}>
          Todos
        </button>
      </div>

      <Cards />
    </div>
  );
};

export default SearchBar;

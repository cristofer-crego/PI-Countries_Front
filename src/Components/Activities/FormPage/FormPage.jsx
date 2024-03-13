import s from "./FormPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RenderOptionActivity from "../../RenderOptionActivity";
import validation from "./validation";
import { createAct } from "../../../Redux/Actions";

const FormPage = () => {
  const allCountries = useSelector((state) => state.allcountries);
  const [allCountriesOrder, setAllCountriesOrder] = useState([]);
  useEffect(() => {
    orderCountries();
  }, []);
  const [userData, setUserData] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    country: [],
  });
  const [error, setError] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      setUserData((prevUserData) => ({
        ...prevUserData,
        country: [...prevUserData.country, value],
      }));
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }

    setError(
      validation(
        {
          ...userData,
          [name]: value,
        },
        name,
        error
      )
    );
  };

  const isFormValid = () => {
    return (
      userData.name !== "" &&
      userData.difficulty !== 0 &&
      userData.duration !== 0 &&
      userData.season !== "" &&
      userData.country.length > 0
    );
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createAct(userData));
    setUserData({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      country: [],
    });
    document.getElementById("name").value = "";
    document.getElementById("difficulty").value = 0;
    document.getElementById("duration").value = 0;
    document.getElementById("season").value = "";
    document.getElementById("country").value = [];
  };

  const orderCountries = () => {
    if (allCountries.length > 0) {
      const orderedCountries = [...allCountries].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setAllCountriesOrder(orderedCountries);
    }
  };
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.textHeader}>Crea tu Actividad</div>
      </div>
      <div className={s.cardBody}>
        <form action="#" onSubmit={handleSubmit}>
          <div className={s.formGroup}>
            <select
              name="name"
              id="name"
              defaultValue=""
              style={error.name ? { borderColor: "#e74c3c" } : {}}
              onBlur={handleBlur}
            >
              <option value="" disabled hidden>
                Nombre
              </option>
              <RenderOptionActivity />
            </select>
            <div style={{ color: "red" }}>{error.name}</div>
            <div>
              <input
                type="text"
                readonly
                className={s.p}
                value={userData.name}
              />
            </div>
          </div>
          <div className={s.formGroup}>
            <select
              name="difficulty"
              id="difficulty"
              defaultValue=""
              style={error.difficulty ? { borderColor: "#e74c3c" } : {}}
              onBlur={handleBlur}
            >
              <option value="" disabled hidden>
                Dificultad
              </option>
              <option value="1">★</option>
              <option value="2">★ ★</option>
              <option value="3">★ ★ ★</option>
              <option value="4">★ ★ ★ ★</option>
              <option value="5">★ ★ ★ ★ ★</option>
            </select>
            <div style={{ color: "red" }}>{error.difficulty}</div>
          </div>
          <div className={s.formGroup}>
            <select
              name="duration"
              id="duration"
              defaultValue=""
              style={error.duration ? { borderColor: "#e74c3c" } : {}}
              onBlur={handleBlur}
            >
              <option value="" disabled hidden>
                Duración
              </option>
              {[...Array(24)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} hs
                </option>
              ))}
            </select>

            <div style={{ color: "red" }}>{error.duration}</div>
            <div>
              <input
                type="text"
                readonly
                className={s.p}
                value={userData.duration + " Hs"}
              />
              <p className={s.p}></p>
            </div>
          </div>
          <div className={s.formGroup}>
            <select
              name="season"
              id="season"
              defaultValue=""
              style={error.season ? { borderColor: "#e74c3c" } : {}}
              onBlur={handleBlur}
            >
              <option value="" disabled hidden>
                Elige su Temporada
              </option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
            <div style={{ color: "red" }}>{error.season}</div>
            <div>
              <input
                type="text"
                readonly
                className={s.p}
                value={userData.season}
              />
            </div>
          </div>
          <div className={s.formGroup}>
            <select
              name="country"
              id="country"
              defaultValue=""
              style={error.country ? { borderColor: "#e74c3c" } : {}}
              onBlur={handleBlur}
            >
              <option value="" disabled hidden>
                Elige El Pais
              </option>
              {allCountries &&
                allCountriesOrder.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.id}, {country.name}
                  </option>
                ))}
            </select>
            <div style={{ color: "red" }}>{error.country}</div>
            <div>
              <input
                type="text"
                readonly
                className={s.p}
                value={userData.country.join(",")}
              />
            </div>
          </div>
          <button type="submit" id="btnCreate" disabled={!isFormValid()}>
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

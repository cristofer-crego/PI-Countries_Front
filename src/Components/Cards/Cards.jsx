import s from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../pagination/Pagination";
export const Cards = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);
  let countriesFilter = useSelector((state) => state.countriesFilter);
  const maximo = countriesFilter.length / porPagina;

  return (
    <div className={s.divContainer}>
      {countriesFilter.length === 0 ? (
        <Card />
      ) : (
        countriesFilter
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((c, index) => {
            return (
              <div key={index} className={s.divCard}>
                <Card
                  name={c.name}
                  continents={c.continents}
                  flags={c.flags}
                  population={c.population}
                  id={c.id}
                />
              </div>
            );
          })
      )}
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

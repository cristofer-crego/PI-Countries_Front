import s from "./HomePage.module.css";
import SearchBar from "../SearchBar/SearchBar";
import FilterComponent from "./Filter/FilterComponent";
import Order from "./Order/Order";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <SearchBar />
        <div className={s.divContainer}>
          <div className={s.divActivities}>
            <Link to={"/activities"}>
              <button className={s.btnActivities}>Actividades</button>
            </Link>
          </div>

          <div className={s.divFilter}>
            <FilterComponent />
          </div>
          <div className={s.divOrder}>
            <Order />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import {
  CREATE_ACT,
  ADD_ACT,
  FILTER_CONT,
  FILTER_ACT,
  ORDER_ALFA,
  ADD_COUNT,
  ADD_FOR_NAME,
  ADD_FOR_ID,
  BTN_ALL,
  ORDER_POBLATION,
  DELETE_ACT,
} from "./Actions.js";

const initialState = {
  allcountries: [],
  activities: [],
  countriesFilter: [],
  countriesID: [],
  validator: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ACT:
      return {
        ...state,
        activities: [...state.activities, payload],
        validator: !state.validator,
      };

    case ADD_ACT:
      return {
        ...state,
        activities: payload,
      };

    case DELETE_ACT:
      return {
        ...state,
        activities: payload,
        validator: !state.validator,
      };

    case ADD_COUNT:
      return {
        ...state,
        allcountries: payload,
        countriesFilter: payload,
      };

    case ADD_FOR_NAME:
      return {
        ...state,
        countriesFilter: payload,
      };
    case ADD_FOR_ID:
      return {
        ...state,
        countriesID: payload,
      };

    case BTN_ALL:
      return {
        ...state,
        countriesFilter: payload,
      };

    case FILTER_CONT:
      let filterCont = state.allcountries.filter((count) => {
        return count.continents === payload;
      });

      return {
        ...state,
        countriesFilter: filterCont,
      };

    case FILTER_ACT:
      let filterAct = state.allcountries.filter((act) => {
        if (act.Activities.length !== 0) {
          return act.Activities.some((acti) => acti.name === payload);
        }
      });

      return {
        ...state,
        countriesFilter: filterAct,
      };

    case ORDER_ALFA:
      let orderCount;
      if (payload === "A") {
        orderCount = [...state.countriesFilter].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (payload === "D") {
        orderCount = [...state.countriesFilter].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        countriesFilter: orderCount,
      };

    case ORDER_POBLATION:
      let order;
      if (payload === "A") {
        order = [...state.countriesFilter].sort(
          (a, b) => b.population - a.population
        );
      }

      if (payload === "D") {
        order = [...state.countriesFilter].sort(
          (a, b) => a.population - b.population
        );
      }

      return {
        ...state,
        countriesFilter: order,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;

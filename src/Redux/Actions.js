import axios from "axios";

export const CREATE_ACT = "CREATE_ACT";
export const ADD_ACT = "ADD_ACT";
export const DELETE_ACT = "DELETE_ACT";
export const FILTER_CONT = "FILTER_CONT";
export const FILTER_ACT = "FILTER_ACT";
export const ORDER_ALFA = "ORDER_ALFA";
export const ORDER_POBLATION = "ORDER_POBLATION";
export const ADD_COUNT = "ADD_COUNT";
export const ADD_FOR_NAME = "ADD_FOR_NAME";
export const ADD_FOR_ID = "ADD_FOR_ID";
export const BTN_ALL = "BTN_ALL";

let URL_COUNTRY = "http://localhost:3001/countries/";
let URL_ACTIVITY = "http://localhost:3001/activities/";

const isValidActivity = (activity) => {
  return (
    activity &&
    activity.name &&
    activity.difficulty &&
    activity.duration &&
    activity.season &&
    activity.country
  );
};

export const createAct = (activity) => {
  return async (dispatch) => {
    try {
      if (!isValidActivity(activity)) {
        return window.alert("Enter a valid activity");
      }

      const response = await axios.post(URL_ACTIVITY, activity, {
        timeout: 5000, // Establece un tiempo de espera de 5 segundos
      });
      const data = response.data;

      if (!data) {
        window.alert("Error loading activity");
      } else {
        window.alert("Activity created successfully!");
      }

      dispatch({
        type: CREATE_ACT,
        payload: data,
      });
    } catch (error) {
      console.log("este es el error: ", error);

      if (error.response) {
        window.alert(error.response.data.error);
      } else if (error.request) {
        window.alert("Error: Unable to connect to the backend.");
      } else {
        window.alert("An error occurred while creating the activity");
      }
    }
  };
};
export const addAct = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(URL_ACTIVITY);
      return dispatch({
        type: ADD_ACT,
        payload: data,
      });
    };
  } catch (error) {
    window.alert("error loading all activities: " + error.response.data.error);
  }
};
export const deleteAct = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.delete(URL_ACTIVITY + id);
      return dispatch({
        type: DELETE_ACT,
        payload: data,
      });
    };
  } catch (error) {
    window.alert("error delete activity: " + error.response.data.error);
  }
};

export const btnAll = (all) => {
  return {
    type: BTN_ALL,
    payload: all,
  };
};

export const addCount = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(URL_COUNTRY);

      return dispatch({
        type: ADD_COUNT,
        payload: data,
      });
    };
  } catch (error) {
    window.alert("error loading all countries: " + error.response.data.error);
  }
};

export const addForname = (name) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL_COUNTRY}?name=${name}`);

      return dispatch({
        type: ADD_FOR_NAME,
        payload: data,
      });
    };
  } catch (error) {
    window.alert(
      "error loading all countries for name: " + error.response.data.error
    );
  }
};

export const addForId = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${URL_COUNTRY}${id}`);

      return dispatch({
        type: ADD_FOR_ID,
        payload: data,
      });
    };
  } catch (error) {
    window.alert(
      "error loading all countries for id: " + error.response.data.error
    );
  }
};

export const filterActivity = (filter) => {
  return {
    type: FILTER_ACT,
    payload: filter,
  };
};

export const filterCont = (filter) => {
  return {
    type: FILTER_CONT,
    payload: filter,
  };
};

export const orderCountriesAlfa = (order) => {
  return {
    type: ORDER_ALFA,
    payload: order,
  };
};
export const orderCountriesPoblation = (order) => {
  return {
    type: ORDER_POBLATION,
    payload: order,
  };
};

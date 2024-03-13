export default (userData, name, error) => {
  if (name === "name") {
    if (userData.name === "") {
      return { ...error, name: "Elije un Nombre" };
    } else {
      return { ...error, name: "" };
    }
  } else if (name === "difficulty") {
    if (userData.difficulty === "") {
      return { ...error, difficulty: "Elije una Dificultad" };
    } else {
      return { ...error, difficulty: "" };
    }
  } else if (name === "duration") {
    if (userData.duration === "") {
      return { ...error, duration: "Elije una Duración" };
    } else {
      return { ...error, duration: "" };
    }
  } else if (name === "season") {
    if (userData.season === "") {
      return { ...error, season: "Elije una Temporada" };
    } else {
      return { ...error, season: "" };
    }
  } else if (name === "country") {
    if (userData.country.length === 0) {
      return { ...error, country: "Elije una País" };
    } else {
      return { ...error, country: "" };
    }
  }
};

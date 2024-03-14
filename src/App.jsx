//imports css

//import libraries
import { Routes, Route } from "react-router-dom";

//import Components
import DetailPage from "./Components/DetailPage/DetailPage";
import FormPage from "./Components/Activities/FormPage/FormPage";
import HomePage from "./Components/HomePage/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Activities from "./Components/Activities/Activities";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home/detail/:id" element={<DetailPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;

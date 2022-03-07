import { Routes, Route } from "react-router-dom";
import HeroPage from "../pages/Hero";
import Homepage from "../pages/Home";

function RoutesFc() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/hero/:heroid" exact element={<HeroPage />} />
    </Routes>
  );
}

export default RoutesFc;

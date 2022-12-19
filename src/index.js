import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import FMP from "./Components/Projects/FMP";
import FrameIt from "./Components/Projects/FrameIt";
import FranklinRegional from "./Components/Projects/FranklinRegional";
import Gradez from "./Components/Projects/Gradez";
import GraphGame from "./Components/Projects/GraphGame";
import LifeCounter from "./Components/Projects/LifeCounter";
import PinballPrice from "./Components/Projects/PinballPrice";
import RPS from "./Components/Projects/RPS";
import VehicleApp from "./Components/Projects/VehicleApp";
import WAM from "./Components/Projects/WAM";
import MitterederWebsite from "./Components/Projects/MitterederWebsite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path="fmp" element={<FMP />} />
          <Route path="fi" element={<FrameIt />} />
          <Route path="fr" element={<FranklinRegional />} />
          <Route path="gz" element={<Gradez />} />
          <Route path="gg" element={<GraphGame />} />
          <Route path="lc" element={<LifeCounter />} />
          <Route path="mw" element={<MitterederWebsite />} />
          <Route path="pp" element={<PinballPrice />} />
          <Route path="rps" element={<RPS />} />
          <Route path="va" element={<VehicleApp />} />
          <Route path="wam" element={<WAM />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import Cuz from "./Components/Projects/Cuz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/cz", element: <Cuz /> },
      { path: "/projects/fmp", element: <FMP /> },
      { path: "/projects/fi", element: <FrameIt /> },
      { path: "/projects/fr", element: <FranklinRegional /> },
      { path: "/projects/gz", element: <Gradez /> },
      { path: "/projects/gg", element: <GraphGame /> },
      { path: "/projects/lc", element: <LifeCounter /> },
      { path: "/projects/mw", element: <MitterederWebsite /> },
      { path: "/projects/pp", element: <PinballPrice /> },
      { path: "/projects/rps", element: <RPS /> },
      { path: "/projects/va", element: <VehicleApp /> },
      { path: "/projects/wam", element: <WAM /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

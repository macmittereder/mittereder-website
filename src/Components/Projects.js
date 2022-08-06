import "./Projects.css"
import gz from "../images/gz/gzicon.png";
import fr from "../images/fr/fricon.png";
import lc from "../images/lc/lcicon.png";
import fi from "../images/fi/fiicon.png";
import fmp from "../images/fmp/fmpicon.png";
import d from "../images/d/dicon.png";
import wam from "../images/wam/wamicon.png";
import rps from "../images/rps/rpsicon.png";
import pp from "../images/pp/ppicon.png";

import { useState } from "react";

import Card from "./Card/Card";
import Gradez from "./Projects/Gradez";
import FranklinRegional from "./Projects/FranklinRegional";
import LifeCounter from "./Projects/LifeCounter";
import FrameIt from "./Projects/FrameIt";
import FMP from "./Projects/FMP";
import GraphGame from "./Projects/GraphGame";
import WAM from "./Projects/WAM";
import VehicleApp from "./Projects/VehicleApp";
import RPS from "./Projects/RPS";
import PinballPrice from "./Projects/PinballPrice";

const Projects = () => {
  const [mainMenu, setMainMenu] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: "Gradez",
      image: gz,
      page: <Gradez />
    }, 
    {
      title: "Franklin Regional",
      image: fr,
      page: <FranklinRegional />
    },
    {
      title: "Life Counter",
      image: lc,
      page: <LifeCounter />
    },
    {
      title: "Frame It",
      image: fi,
      page: <FrameIt />
    }, 
    {
      title: "Fast Movie Photos",
      image: fmp,
      page: <FMP />
    },
    {
      title: "Graph Game",
      image: d,
      page: <GraphGame />
    },
    {
      title: "Words and Music",
      image: wam,
      page: <WAM />
    },
    {
      title: "Vehicle App",
      image: d,
      page: <VehicleApp />
    },
    {
      title: "Rock Paper Scissors",
      image: rps,
      page: <RPS />
    },
    {
      title: "Pinball Price",
      image: pp,
      page: <PinballPrice />
    }
  ];
  
  const currentProjectHandler = (project) => {
    setMainMenu(false);
    setCurrentProject(project);
  }

  const goBack = () => {
    setMainMenu(true);
    setCurrentProject(null);
  }

  const showProject = () => {
    return (
      <div> 
        <div onClick={goBack}>
          <p>Back</p>
        </div>
        { currentProject.page }
      </div>
    )
  }

  return (
    <div className="projects">
      {mainMenu && projects.map((project) => {
        return (
          <Card
            title={project.title}
            image={project.image}
            onClick={() => currentProjectHandler(project)}
          />
        );
      })}
      {!mainMenu && showProject()}
    </div>
  );
}

export default Projects;
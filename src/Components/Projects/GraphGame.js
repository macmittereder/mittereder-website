import ProjectHeader from "./ProjectHeader";
import "./Projects.css";
import icon from "../../images/d/dicon.png";

const GraphGame = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Graph Game"
        icon={icon}
        summary={`This app was developed sophomore year in college for a Software Engineer 
        class forAndroid using Android Studio. I was the software lead on this project with 
        5 other classmates working on this project. The goal of this app was a game thought 
        up by a math department teacher to move "pebbles" around a map that was created using 
        graph theory to the end node to win the game. The game was developed to be a two player 
        game but an AI element was developed in my free time to create a single player mode.`}
      />
    </div>
  );
};

export default GraphGame;

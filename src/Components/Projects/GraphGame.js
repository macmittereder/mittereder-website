import ProjectHeader from "./ProjectHeader";
import "./Projects.css";
import icon from "../../images/d/dicon.png";
import img1 from "../../images/gg/gg1.png";
import img2 from "../../images/gg/gg2.png";
import img3 from "../../images/gg/gg3.png";
import img4 from "../../images/gg/gg4.png";
import img5 from "../../images/gg/gg5.png";
import img6 from "../../images/gg/gg6.png";
import ProjectRow from "./ProjectRow";

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
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `This is the menu users are greated with when opening the app. From this menu users can start the game and pick which map they want to play.`,
        }}
        section2={{
          image: img2,
          text: `The about menu helps the user understand how the game is played.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `When starting the game the user is allowed to pick a different board set up that they prefer.`,
        }}
        section2={{
          image: img4,
          text: `This is an example of one of the board layouts. There is also a button in the bottom corner that allows single player mode to have the computer make the defender move.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img5,
          text: `This is another example of a board layout.`,
        }}
        section2={{
          image: img6,
          text: `When the game is won by either user this display will appear to restart the game or choose a different map.`,
        }}
      />
    </div>
  );
};

export default GraphGame;

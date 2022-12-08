import "./Projects.css";
import icon from "../../images/rps/rpsicon.png";
import img1 from "../../images/rps/rps1.png";
import img2 from "../../images/rps/rps2.png";
import img3 from "../../images/rps/rps3.png";
import img4 from "../../images/rps/rps4.png";
import img5 from "../../images/rps/rps5.png";
import img6 from "../../images/rps/rps6.png";
import ProjectHeader from "./ProjectHeader";
import ProjectRow from "./ProjectRow";

const RPS = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Rock, Paper, Scissors"
        icon={icon}
        summary={`This app was developed junior year of high school for Android using eclipse. 
        The idea of this app was a proof of concept to develop my first app and publish it on 
        the play store. During a java class we developed a rock, paper, scissors game with command 
        line style input so I ported it to be more interactive in an app setting.`}
      />
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `This view is the main menu that you are greeted with when opening the app.`,
        }}
        section2={{
          image: img2,
          text: `This is the single player view where you can make your selection off the bottom 3 choices.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `The player has made the choice of the scissors and the computer has chosen rock, so the person would lose in this case.`,
        }}
        section2={{
          image: img4,
          text: `This time the player chose rock and the computer had chosen scissors so the person would win.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img5,
          text: `This is the stats screen where all the stats are stored.`,
        }}
        section2={{
          image: img6,
          text: `This view is the preferences menu where you can change the font in game. You have the option to keep track of your stats and you can also clear stats data.`,
        }}
      />
    </div>
  );
};

export default RPS;

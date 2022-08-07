import "./Projects.css";
import icon from "../../images/rps/rpsicon.png";
import ProjectHeader from "./ProjectHeader";

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
    </div>
  );
};

export default RPS;

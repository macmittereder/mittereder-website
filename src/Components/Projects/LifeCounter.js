import "./Projects.css";
import icon from "../../images/lc/lcicon.png";
import ProjectHeader from "./ProjectHeader";

const LifeCounter = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Life Counter"
        icon={icon}
        summary="Created freshman year of college for Android using Android Studio. The idea of this app came from plyaing the card gameMagic the Gathering with friends and either moving our life counter dice or not having the correct token cards when playing. This app is a solution to these problems by keeping track of life points and token cards for each player. Another feature of the app is the customability of screen orientation. The screen can either be portrait facing one player or the one side can be flipped so both players can adjust thier own life points and tokens. The feature that makes this app unique is the ability to save game and view how each player lost life pionts. THis was achieved by creating a text file and writing output to it when the points were changed. When the game is reviewed the points are clumped together based on player, if points were lost or gained and when it happened."
      />
    </div>
  );
}

export default LifeCounter;
import "./Projects.css";
import icon from "../../images/fmp/fmpicon.png";
import ProjectHeader from "./ProjectHeader";

const FMP = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Fast Movie Photos"
        icon={icon}
        summary={`This app was a contractor project through Blast Off Apps developed foriOS using Xcode.  
        Fast Movie Photos is a website online that the client makes photo movies for their clients and posts  
        them on the website. The purpose of the app is for the client to be able to access the videos online 
        and adjust the playback speed as the video is playing. The videos were accessed using a link directly  
        to them with the media api provided by Apple.`}
      />
    </div>
  );
};

export default FMP;

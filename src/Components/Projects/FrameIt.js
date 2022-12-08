import "./Projects.css";
import icon from "../../images/fi/fiicon.png";
import ProjectHeader from "./ProjectHeader";

const FrameIt = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="FrameIt"
        icon={icon}
        summary={`Created senior year of high school for iOS developed in xCode. The idea of this app 
        was brought to me by a classmate and we became partners to develop it. I was responsible for 
        the programming part of the project and he did the visual aspect of it using vector art. Before 
        release of the app we strategically advertised it with social media to build up the popularity. 
        After the release of FrameIt the app was placed on the top paid photography app list and made it 
        on the list of overall top paid apps.`}
      />
    </div>
  );
};

export default FrameIt;

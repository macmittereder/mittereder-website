import ProjectHeader from "./ProjectHeader";
import "./Projects.css";
import icon from "../../images/gz/gzicon.png";

const Gradez = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Gradez"
        icon={icon}
        summary={`This app was developed for my capstone project for Saint Vincent College 
        using Android Studio and Firebase. Gradez allows users to track their grades for classes 
        that are accumulative or weighted. Firebase is used to manage users and for a database. 
        Below is a representation of my capstone project poster.`}
      />
    </div>
  );
};

export default Gradez;

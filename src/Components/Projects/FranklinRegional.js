import ProjectHeader from "./ProjectHeader";
import "./Projects.css";
import icon from "../../images/fr/fricon.png";

const FranklinRegional = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Franklin Regional" 
        icon={icon}
        summary="Created senior year of high school for Android using Eclipse. I developed this app to make it easier to view the Franklin Regional school district website and bypass their mobile version. Push notifications were also implemented using the Parse api to alert users of delays and cancellations. This app uses a master detail view for a slide out menu and a webview to display the different webpages." />
    </div>
  );
}

export default FranklinRegional;
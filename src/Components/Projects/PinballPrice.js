import "./Projects.css";
import icon from "../../images/pp/ppicon.png";
import ProjectHeader from "./ProjectHeader";

const PinballPrice = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Pinball Price"
        icon={icon}
        summary={`This app was a contractor project through Blast Off Apps developed for Android 
        with Android Studio and iOS with Xcode.Pinballprice.com is the worlds largest selection of 
        pinball machines to either buy or find more information on a specific one. The app displays 
        their website using a slide out menu for navigation and a webview. Their webpages were also 
        modified for the app to remove the navigation bar and padding from the side upon clients request. 
        However, the subdomain for this project has been removed by the the owner of Pinballprice.com.`}
      />
    </div>
  );
};

export default PinballPrice;

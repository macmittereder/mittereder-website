import "./Projects.css";
import icon from "../../images/pp/ppicon.png";
import img1 from "../../images/pp/pp1.png";
import img2 from "../../images/pp/pp2.png";
import img3 from "../../images/pp/pp3.png";
import ProjectHeader from "./ProjectHeader";
import ProjectRow from "./ProjectRow";

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
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `The slide out side menu made navigating through the website easier for users.`,
        }}
        section2={{
          image: img2,
          text: `This is the slide out menu on the iPhone.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `This was the main webview display for the app. The Pinballprice website was modified for a mobile version and used inside a web browser.`,
        }}
        section2={{
          image: null,
          text: ``,
        }}
      />
    </div>
  );
};

export default PinballPrice;
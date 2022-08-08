import ProjectHeader from "./ProjectHeader";
import "./Projects.css";
import icon from "../../images/fr/fricon.png";
import img1 from "../../images/fr/fr1.png";
import img2 from "../../images/fr/fr2.png";
import img3 from "../../images/fr/fr3.png";
import img4 from "../../images/fr/fr4.png";
import img5 from "../../images/fr/fr5.png";
import img6 from "../../images/fr/fr6.png";
import ProjectRow from "./ProjectRow";

const FranklinRegional = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Franklin Regional"
        icon={icon}
        summary={`Created senior year of high school for Android using Eclipse. I developed this 
        app to make it easier to view the Franklin Regional school district website and bypass 
        their mobile version. Push notifications were also implemented using the Parse api to alert 
        users of delays and cancellations. This app uses a master detail view for a slide out menu 
        and a webview to display the different webpages.`}
      />
      <hr />
      <ProjectRow
        section1={{
          image: img1,
          text: `This is the home page of the Franklin Regional website and the first page you are greeted with.`,
        }}
        section2={{
          image: img2,
          text: `The main menu slides out from the side by either a swipe geasture or by tappig the icon in the top left corner.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img3,
          text: `These are other links that people might be interested in visiting.`,
        }}
        section2={{
          image: img4,
          text: `This is an example of the user navigating to the high school's webpage.`,
        }}
      />
      <ProjectRow
        section1={{
          image: img5,
          text: `This is an exmample of the user navigating to one of the elementary school's webpage.`,
        }}
        section2={{
          image: img6,
          text: `This is the settings page where the user has the option to view the webpage as a desktop or as a mobile view.`,
        }}
      />
    </div>
  );
};

export default FranklinRegional;

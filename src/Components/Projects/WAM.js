import "./Projects.css";
import icon from "../../images/wam/wamicon.png";
import ProjectHeader from "./ProjectHeader";

const WAM = () => {
  return (
    <div className="content">
      <ProjectHeader
        title="Words and Music"
        icon={icon}
        summary={`This app was a contractor project through Blast Off Apps developed for iOS with Xcode. 
        Words and Music is a book store in Wheeling,West Virginia. I was responsible for porting the 
        Android version to iOS. The final product of this app uses the Parse api to access the Parse 
        database where I stored their book collection. A Paypal api was also implemented so people have 
        more options to pay when buying a book from here.`}
      />
    </div>
  );
};

export default WAM;

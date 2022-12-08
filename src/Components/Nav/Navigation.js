import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbarTop">
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
      </div>
      <div className="navbarBottom">
        <button
          onClick={() =>
            window.open("https://github.com/macmittereder", "_blank")
          }
        >
          Github
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mackenzie-mittereder/",
              "_blank"
            )
          }
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Navigation;

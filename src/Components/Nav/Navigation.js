import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly bg-white flex-1 w-full">
      <div className="flex flex-1 justify-evenly">
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
      </div>
      <div className="flex flex-1 justify-evenly">
        <button
          className="bg-white border-0 text-xl hover:underline"
          onClick={() =>
            window.open("https://github.com/macmittereder", "_blank")
          }
        >
          Github
        </button>
        <button
          className="bg-white border-0 text-xl hover:underline"
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

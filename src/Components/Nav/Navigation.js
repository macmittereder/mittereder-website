import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly bg-white flex-1 w-full">
        <div className="flex flex-1 justify-evenly items-center">
          <Link className="text-4xl font-bold hover:underline" to="/">
            Home
          </Link>
          <Link className="text-4xl font-bold hover:underline" to="projects">
            Projects
          </Link>
        </div>
        <div className="flex flex-1 justify-evenly items-center">
          <button
            className="bg-white w-40 border-0 text-xl hover:underline"
            onClick={() =>
              window.open("https://github.com/macmittereder", "_blank")
            }
          >
            <img
              src="https://www.kindpng.com/picc/m/128-1280357_github-logo-png-transparent-png.png"
              alt="Github"
            />
          </button>
          <button
            className="bg-white w-40 border-0 text-xl hover:underline"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mackenzie-mittereder/",
                "_blank"
              )
            }
          >
            <img
              src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
              alt="LinkedIn"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;

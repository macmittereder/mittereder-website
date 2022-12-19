import { NavLink } from "react-router-dom";
import githubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin-logo.png";

const linkClass =
  "flex text-lg md:text-2xl lg:text-4xl font-bold w-2/5 h-16 items-center justify-center m-2";

const Navigation = () => {
  return (
    <>
      <div className="flex bg-white items-center justify-center flex-col">
        <hr className="flex border border-black w-3/4" />
        <div className="flex flex-row justify-evenly flex-1 w-full text-center">
          <div className="flex flex-1 justify-evenly items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                linkClass + (isActive ? " underline" : undefined)
              }
            >
              Home
            </NavLink>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                linkClass + (isActive ? " underline" : undefined)
              }
            >
              Projects
            </NavLink>
          </div>
          <div className="flex flex-1 justify-evenly items-center">
            <button
              className={linkClass}
              onClick={() =>
                window.open("https://github.com/macmittereder", "_blank")
              }
            >
              <img
                src={githubLogo}
                className="h-max-full h-auto w-auto p-2 xl:p-10 2xl:p-24"
                alt="Github"
              />
            </button>
            <button
              className={linkClass}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mackenzie-mittereder/",
                  "_blank"
                )
              }
            >
              <img
                src={linkedinLogo}
                className="h-max-full f-auto w-auto p-2 xl:p-10 2xl:p-24"
                alt="LinkedIn"
              />
            </button>
          </div>
        </div>
        <hr className="flex border border-black w-3/4" />
      </div>
    </>
  );
};

export default Navigation;

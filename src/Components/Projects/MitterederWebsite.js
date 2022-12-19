import ProjectHeader from "./ProjectHeader";
import ProjectFooter from "./ProjectFooter";
import icon from "../../images/mw/mwicon.png";
import r1 from "../../images/mw/r1.png";
import r2 from "../../images/mw/r2.png";

const MitterederWebsite = () => {
  return (
    <div className="flex bg-white items-start flex-1 justify-center flex-wrap lg:flex-col p-2">
      <ProjectHeader
        title="Mittereder.com"
        icon={icon}
        summary={`A portfolio website to show some projects that I have started and finished.`}
      />
      <hr />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img src={r1} alt="Release 1.0 Screenshot" />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <a
            className="underline italic"
            href="https://github.com/macmittereder/mittereder-website/tree/release-1.0"
          >
            release-1.0
          </a>
          <p>
            First written in Pug and Nodes.js with Sass middleware. Originally
            the CSS was being built on every page load with the middleware so
            that was fixed by creating a static CSS file with Grunt. The website
            was hosted via VPS on a couple different hosting platforms until I
            used the GitHub action on Digital Ocean to automatically deploy my
            website.
          </p>
        </div>
      </div>
      <div className="flex mt-2 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <a
            className="underline italic"
            href="https://github.com/macmittereder/mittereder-website/tree/release-2.0"
          >
            release-2.0
          </a>
          <p>
            Rewritten in React with Tailwindcss. The website is now hosted on
            Github using their pages functionality to easily deploy any updates.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={r2} alt="Release 2.0 Screenshot" />
        </div>
      </div>
      <ProjectFooter />
    </div>
  );
};

export default MitterederWebsite;

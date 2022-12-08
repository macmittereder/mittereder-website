import "./Home.css";
import Tile, { Section } from "../Components/Tile/Tile";

const Home = () => {
  const workExperience = [
    {
      title: "Dollar Bank | Sr. Software Developer | 8/2021 - Current",
      content:
        "Developing software in the Distributed Development & Integration Department.",
    },
    {
      title: "aSa | Software Developer II | 5/2018 - 8/2021",
      content: "Worked on the rebar processing module of aSa.Studio software.",
    },
    {
      title: "ATS Evolution | Software Engineer Intern | 2/2017 - 12/2017",
      content: "Unified products into a studio environment for customers.",
    },
    {
      title: "TekSystems | Deployment Technician | 7/2015 - 9/2017",
      content:
        "Moving computers from the PNC complex in Pittsburgh to their new PNC tower.",
    },
    {
      title: "Blast Off Apps | Contractor | 4/2015 - 7/2016",
      content: "Developed mobile apps for various clients on Android and iOS.",
    },
    {
      title: "Moe's Southwest Grill | Shift Manager | 11/2013 - 9/2017",
      content:
        "Added to my leadership experience in a team based enviroment and training coworkers. Increased my social skills and patience with customers and coworkers.",
    },
  ];

  const educations = [
    {
      title: "Saint Vincent College | Latrobe, PA | 2014 - 2018",
      content: "Major: Computing and Information Science",
    },
    {
      title: "Franklin Regional | Murrysville, PA | 2001 - 2014",
      content: "",
    },
  ];

  return (
    <div className="home">
      <Tile title="Work Experience">
        {workExperience.map((experience, idx) => {
          return (
            <div>
              <Section title={experience.title} content={experience.content} />
              {idx != workExperience.length - 1 ? <hr /> : ""}
            </div>
          );
        })}
      </Tile>
      <Tile title="Education">
        {educations.map((education, idx) => {
          return (
            <div>
              <Section title={education.title} content={education.content} />
              {idx != educations.length - 1 ? <hr /> : ""}
            </div>
          );
        })}
      </Tile>
    </div>
  );
};

export default Home;

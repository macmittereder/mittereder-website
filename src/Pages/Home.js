import Tile from "../Components/Tile/Tile";
import Section from "../Components/Tile/Section";
import LexiconLogo from "../images/lexicon-logo.png";
import DollarBankLogo from "../images/dollar-bank-logo.png";
import aSaLogo from "../images/aSa-logo.png";
import ATSLogo from "../images/ats-logo.png";
import SVCLogo from "../images/svc-logo.png";
import moment from "moment";

const Home = () => {
  const currentJobTime = () => {
    var start = moment([2023, 3]);
    var end = moment([moment().year(), moment().month() + 2]);

    var months = moment.duration(end.diff(start)).months();
    var years = moment.duration(end.diff(start)).years();

    return `(${years > 0 ? years + (years > 1 ? " yrs" : " yr") : ""}${
      months > 0 ? months + (months > 1 ? " mos" : " mo") : ""
    })`;
  };

  const workExperience = [
    {
      company: "Lexicon",
      logo: LexiconLogo,
      location: "remote",
      position: "Full Stack Developer",
      time: "August 2021 - Present " + currentJobTime(),
      content: [
        "Developing Angular frontend and .NET backend SaaS for law firms.",
        "Maintaining AngularJS legacy software for Cordell & Cordell law firms.",
      ],
    },
    {
      company: "Dollar Bank",
      logo: DollarBankLogo,
      location: "Pittsburgh, PA",
      position: "Senior Application Developer",
      time: "August 2021 - March 2023 (1 yr 8 mos)",
      content: [
        "Developed .NET applications from console applications to web services.",
        "Rewrote legacy ASP.NET web pages to .NET MVC.",
        "Built SSIS packages for data migration and data syncing between companies and the mainframe.",
      ],
    },
    {
      company: "aSa",
      logo: aSaLogo,
      location: "Murrysville, PA",
      position: "Software Developer II",
      time: "May 2018 - August 2021 (3 yrs 4 mos)",
      content: [
        "Worked in two teams, Processing and Inventory Tracking, implementing new features using AngularJS and Entity Framework.",
        "Fixed customer issues all around the world including production database updates. ",
        "Used SSRS to create reports for customers to be used everyday in their company. ",
      ],
    },
    {
      company: "ATS Evolution",
      logo: ATSLogo,
      location: "Greensburg, PA",
      position: "Software Engineer Intern",
      time: "February 2017 - January 2018 (11 mos)",
      content: [
        "Developed disaster training software used by the Department of Defense using Pug, Node.js and Postgres.",
        "Assisted in performing quality assurance and software testing via various tests tools and performance metrics to ensure a responsive end-user experience.",
      ],
    },
  ];

  const education = {
    school: "Saint Vincent College",
    logo: SVCLogo,
    location: "Latrobe, PA",
    position: "Computing and Information Science",
    time: "2014 - 2018",
    content: [
      "Courses taken include Server Side Programming, Database Concepts and Information Structures, Software Engineering, Discrete Mathematics, Computer Architecture and Operating Systems and Website Design.",
    ],
  };

  return (
    <div className="flex bg-white p-2 flex-1 flex-col">
      <Tile title="Work Experience" type="wrk">
        {workExperience.map((experience) => {
          return (
            <div
              className="m-2 p-4 border-b border-black"
              key={experience.company}
            >
              <Section experience={experience} />
            </div>
          );
        })}
      </Tile>
      <Tile title="Education" type="edu">
        <div>
          <Section experience={education} />
        </div>
      </Tile>
    </div>
  );
};

export default Home;

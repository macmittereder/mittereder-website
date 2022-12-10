import Tile from "../Components/Tile/Tile";
import Section from "../Components/Tile/Section";

const Home = () => {
  const workExperience = [
    {
      company: "Dollar Bank",
      location: "Pittsburgh, PA",
      position: "Senior Application Developer",
      time: "August 2021 - Present",
      content: [
        "Developed .NET applications from console applications to web services.",
        "Rewrote legacy ASP.NET web pages to .NET MVC.",
        "Built SSIS packages for data migration and data syncing between companies and the mainframe.",
      ],
    },
    {
      company: "aSa",
      location: "Murrysville, PA",
      position: "Software Developer II",
      time: "May 2018 - August 2021",
      content: [
        "Worked in two teams, Processing and Inventory Tracking, implementing new features using AngularJS and Entity Framework.",
        "Fixed customer issues all around the world including production database updates. ",
        "Used SSRS to create reports for customers to be used everyday in their company. ",
      ],
    },
    {
      company: "ATS Evolution",
      location: "Greensburg, PA",
      position: "Software Engineer Intern",
      time: "February 2017 - January 2018",
      content: [
        "Developed disaster training software used by the Department of Defense using Pug, Node.js and Postgres.",
        "Assisted in performing quality assurance and software testing via various tests tools and performance metrics to ensure a responsive end-user experience.",
      ],
    },
    {
      company: "Blast Off Apps",
      location: "Remote",
      position: "Contractor",
      time: "April 2015 - July 2016",
      content: [
        "Developed mobile apps for various clients for Android and iOS including FastMovie Photos, Words and Music, Vehicle List and Pinball Price.",
        "Analyzed the market needs and designed the applications based on client's needs.",
        "Investigated the applications performance using virtual Android and iOS Emulators.",
      ],
    },
  ];

  const educations = [
    {
      school: "Saint Vincent College",
      location: "Latrobe, PA",
      position: "Computing and Information Science",
      time: "2014 - 2018",
      content: [
        "Courses taken include Server Side Programming, Database Concepts and Information Structures, Software Engineering, Discrete Mathematics, Computer Architecture and Operating Systems and Website Design.",
      ],
    },
  ];

  return (
    <div className="flex bg-white p-2 flex-1 flex-col">
      <Tile title="Work Experience" type="wrk">
        {workExperience.map((experience) => {
          return (
            <div className="m-2 p-4 border-b border-black">
              <Section experience={experience} />
            </div>
          );
        })}
      </Tile>
      <Tile title="Education" type="edu">
        {educations.map((education) => {
          return (
            <div>
              <Section title={education.title} experience={education} />
            </div>
          );
        })}
      </Tile>
    </div>
  );
};

export default Home;

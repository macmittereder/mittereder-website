import "./ProjectRow.css";

const ProjectRow = (props) => {
  return (
    <div className="projectRow">
      <div className="projectRowDiv">
        <img className="screenshot" src={props.section1.image} />
        <p className="screenshotText">{props.section1.text}</p>
      </div>
      <div className="projectRowDiv">
        <p className="screenshotText">{props.section2.text}</p>
        <img className="screenshot" src={props.section2.image} />
      </div>
    </div>
  );
};

export default ProjectRow;

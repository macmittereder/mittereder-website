import "./ProjectHeader.css";

const ProjectHeader = (props) => {
  return (
    <div className="header">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="details">
        <img src={props.icon} className="icon" alt="icon" />
        <div className="summary">
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;

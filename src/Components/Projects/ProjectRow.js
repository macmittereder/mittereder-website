const ProjectRow = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly">
      <div className="flex flex-1">
        <img
          className="flex flex-1 w-24 p-2"
          alt="Screenshot"
          src={props.section1.image}
        />
        <p className="flex flex-1 py-2">{props.section1.text}</p>
      </div>
      <div className="flex flex-1">
        {props.section2.image ? (
          <>
            <p className="flex flex-1 py-2 md:items-end">
              {props.section2.text}
            </p>
            <img
              className="flex flex-1 w-24 p-2"
              alt="Screenshot"
              src={props.section2.image}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectRow;

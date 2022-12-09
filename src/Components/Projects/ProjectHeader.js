const ProjectHeader = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-4xl text-center font-bold">
        <p>{props.title}</p>
      </div>
      <div className="flex flex-row w-full">
        <img src={props.icon} className="flex max-w-xs float-left" alt="icon" />
        <div className="flex flex-1 p-2">
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;

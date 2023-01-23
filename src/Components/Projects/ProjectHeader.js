const ProjectHeader = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-4xl text-center font-bold">
        <p>{props.title}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center">
        <img
          src={props.icon}
          className="flex md:float-left h-56 md:h-80"
          alt="icon"
        />
        <div className="flex flex-1 p-2">
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;

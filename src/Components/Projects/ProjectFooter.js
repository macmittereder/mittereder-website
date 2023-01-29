import { NavLink } from "react-router-dom";

const ProjectFooter = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col mt-2">
      <hr className="border border-black w-3/4" />
      <NavLink to="/projects" className="font-bold text-xl m-4">
        Back
      </NavLink>
    </div>
  );
};

export default ProjectFooter;

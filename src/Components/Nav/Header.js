import brace from "../../images/brace.png";
import me from "../../images/me.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <img
          src={me}
          alt="Me"
          className="rounded-full w-3/4 lg:w-1/2 xl:w-1/3"
        />
      </div>
      <img src={brace} alt="Brace" className="h-6 lg:h-12 w-full -m-2" />
      <div className=" bg-white ">
        <p className="text-4xl md:text-6xl lg:text-8xl text-blue-500 text-center w-full my-6">
          Mackenzie Mittereder
        </p>
      </div>
    </>
  );
};

export default Header;

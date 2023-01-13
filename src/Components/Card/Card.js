const Card = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="m-2 justify-center items-center w-80 h-auto cursor-pointer"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          position: "relative",
        }}
        onClick={props.onClick}
      >
        <div className="mt-40 sm:mt-64 bg-gray-400 bg-opacity-80">
          <p className="p-2 text-lg font-bold">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

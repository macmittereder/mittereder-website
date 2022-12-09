const Card = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-64 h-64 m-2 justify-center items-center"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={props.onClick}
      >
        <div className="mt-56 bg-gray-400 ">
          <p className="items-end p-2">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

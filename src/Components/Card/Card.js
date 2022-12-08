const Card = (props) => {
  return (
    <div
      className="h-64 w-64 bg-cover m-2"
      style={{ backgroundImage: `url(${props.image})` }}
      onClick={props.onClick}
    >
      <div className="mt-56 bg-gray-400 ">
        <p className="items-end p-2">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;

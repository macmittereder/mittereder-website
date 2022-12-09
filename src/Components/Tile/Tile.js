const Tile = (props) => {
  return (
    <div className="p-4 rounded-sm shadow-lg py-0 bg-white m-2 flex-1">
      <p className="text-4xl text-center font-bold mb-8">{props.title}</p>
      {props.children}
    </div>
  );
};

export default Tile;

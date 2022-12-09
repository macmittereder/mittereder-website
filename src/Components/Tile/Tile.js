const Tile = (props) => {
  return (
    <div className="p-4 rounded-sm shadow-lg py-0 bg-white m-2 flex-1">
      <p className="text-2xl text-center font-bold">{props.title}</p>
      {props.children}
    </div>
  );
};

const Section = (props) => {
  return (
    <div>
      <p className="text-xl font-bold text-left">{props.title}</p>
      <p className="text-lg text-left">{props.content}</p>
    </div>
  );
};

export { Tile, Section };

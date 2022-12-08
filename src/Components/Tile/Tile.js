import "./Tile.css";
import "./Section.css";

const Tile = (props) => {
  return (
    <div className="tile">
      <p className="tile-title">{props.title}</p>
      {props.children}
    </div>
  );
}

const Section = (props) => {
  return (
    <div>
      <p className="section-title">{props.title}</p>
      <p className="section-content">{props.content}</p>
    </div>
  );
}

export default Tile;
export { Section }; 
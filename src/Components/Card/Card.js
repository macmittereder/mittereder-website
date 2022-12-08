import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{backgroundImage: `url(${props.image})`}} onClick={props.onClick} >
      <p>{props.title}</p>
    </div> 
  );
}

export default Card;
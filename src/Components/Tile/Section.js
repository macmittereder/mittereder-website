const Section = (props) => {
  return (
    <div>
      <p className="text-xl font-bold text-left">{props.title}</p>
      <ul>
        {props.content.map((info) => (
          <li>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default Section;

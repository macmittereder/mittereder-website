const WorkSection = (props) => {
  let experience = props.experience;

  return (
    <div>
      <div className="flex items-center justify-center">
        {experience.logo ? (
          <img
            src={experience.logo}
            alt="Company Logo"
            className="w-full lg:w-auto lg:h-64 text-center"
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-row">
        <p className="text-2xl font-bold text-left">
          {experience.company ?? experience.school}
        </p>
        <p className="text-2xl">&nbsp;- {experience.location}</p>
      </div>
      <p className="text-2xl">{experience.position}</p>
      <p className="text-lg font-bold">{experience.time}</p>
      <ul className="ml-8">
        {experience.content.map((info, idx) => (
          <li className="list-disc text-md" key={idx}>
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;

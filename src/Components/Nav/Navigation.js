import "./Navigation.css";

const Navigation = (props) => {
  const pageStateHandler = (pageState) => {
    props.pageStateHandler(pageState);
  }

  return (
    <div className="navbar">
      <div className="navbarTop">
        <button onClick={() => pageStateHandler("Home")}>Home</button>
        <button onClick={() => pageStateHandler("Projects")}>Projects</button>
      </div>
      <div className="navbarBottom">
        <button onClick={() => window.open("https://github.com/macmittereder", '_blank')}>Github</button>
        <button onClick={() => window.open("https://www.linkedin.com/in/mackenzie-mittereder/", "_blank")}>LinkedIn</button>
      </div>
    </div>
  );
};

export default Navigation;
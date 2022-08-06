import "./App.css";
import Header from "./Components/Nav/Header";
import Layout from "./Components/Nav/Layout";
import Navigation from "./Components/Nav/Navigation";
import Home from "./Components/Home"
import Projects from "./Components/Projects";
import Background from "./Components/Nav/Background";
import { Fragment, useState } from "react";

const App = () => {
  const [pageState, setPageState] = useState("Projects");

  const pageStateHandler = (newState) => {
    setPageState(newState);
  }

  const pageView = () => {
    if (pageState === "Home") return <Home />;
    if (pageState === "Projects") return <Projects />;
  }

  const view = () => {
    return (
      <Layout>
        <Header />
        <Navigation pageStateHandler={pageStateHandler}/>
        <main>
          {pageView()}
        </main>
      </Layout>
    )
  }

  return (
    <Fragment>
      <Background />  
      <Layout>
        <Header />
        <Navigation pageStateHandler={pageStateHandler} />
        <main>
          {pageView()}
        </main>
      </Layout>
    </Fragment>
  );
};

export default App;
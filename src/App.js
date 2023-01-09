import Header from "./Components/Nav/Header";
import Layout from "./Components/Nav/Layout";
import Navigation from "./Components/Nav/Navigation";
import Background from "./Components/Nav/Background";
import { Outlet, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

ReactGA.initialize("G-3QVK5N1Q3E");

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Background />
      <Layout>
        <Header />
        <Navigation />
        <Outlet />
      </Layout>
    </>
  );
};

export default App;

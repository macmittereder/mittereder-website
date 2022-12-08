import "./App.css";
import Header from "./Components/Nav/Header";
import Layout from "./Components/Nav/Layout";
import Navigation from "./Components/Nav/Navigation";
import Background from "./Components/Nav/Background";
import { Outlet } from "react-router-dom";

const App = () => {
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

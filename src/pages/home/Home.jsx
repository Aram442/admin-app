import React from "react";
import "./home.scss";
import SideBar from "../../components/sidebar/SideBar";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer"> container</div>
    </div>
  );
}

export default Home;

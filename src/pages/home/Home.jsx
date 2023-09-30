import React from "react";
import "./home.scss";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          {/* <Chart /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

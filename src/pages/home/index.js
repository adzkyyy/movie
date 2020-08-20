import React from "react";
import AppBar from "../../component/app-bar";
import Styles from "./style.module.css";
import TabsCategory from "../../component/tabs-category";
import Card from "../../component/card";

function Home() {
  return (
    <React.Fragment>
      <div className={Styles.container}>
        <AppBar />
        <TabsCategory />
        <Card />
      </div>
    </React.Fragment>
  );
}
export default Home;

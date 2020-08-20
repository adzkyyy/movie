import React from "react";
import Menu from "../../asset/icons/menu";
import Search from "../../asset/icons/search";
import Styles from "./styles.module.css";

function AppBar() {
  return (
    <React.Fragment>
      <div className={Styles.AppBar}>
        <Menu />
        <Search />
      </div>
    </React.Fragment>
  );
}
export default AppBar;

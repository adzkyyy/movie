import React, { useState } from "react";
import Styles from "./styles.module.css";

function AppBar() {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <div className={Styles.TabsWrapper}>
        <div
          onClick={() => setValue(0)}
          className={value === 0 ? Styles.DivText : Styles.DivTextoff}
        >
          <h1>in theater</h1>
          {value == 0 && <hr className={Styles.TabsIndicator} />}
        </div>
        <div
          onClick={() => setValue(1)}
          className={value === 1 ? Styles.DivText : Styles.DivTextoff}
        >
          <h1>Box Office</h1>
          {value == 1 && <hr className={Styles.TabsIndicator} />}
        </div>
        <div
          onClick={() => setValue(2)}
          className={value === 2 ? Styles.DivText : Styles.DivTextoff}
        >
          <h1>Coming Soon</h1>
          {value == 2 && <hr className={Styles.TabsIndicator} />}
        </div>
        <div
          onClick={() => setValue(3)}
          className={value === 3 ? Styles.DivText : Styles.DivTextoff}
        >
          <h1>Trending NOW</h1>
          {value == 3 && <hr className={Styles.TabsIndicator} />}
        </div>
      </div>
    </React.Fragment>
  );
}
export default AppBar;

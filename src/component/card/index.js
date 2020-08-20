import React, { useState, useEffect } from "react";
import Styles from "./styles.module.css";
import Mission from "../../asset/poster.jpg";
import { getApi } from "../../services/getapi";

function AppBar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const respon = await getApi();
      setData(respon);
    }
    fetchApi();
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <div className={Styles.TabsWrapper}>
        {data.map((item) => (
          <div className={Styles.div}>
            <p>{item.name}</p>
            <img src={item.img} alt="" className={Styles.img} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default AppBar;

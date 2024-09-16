import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";
import ChartComponent from "./ChartComponent";
function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        &#215;
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)}  type={type}/>
        </div>
      </div>
    </div>
  );
}

export default Chart;


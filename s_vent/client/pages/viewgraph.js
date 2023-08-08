import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./uservents.module.css";
import MysideNav from "../components/sideNav";
import axios from "axios";
import Chart from "chart.js";


const ViewPage = () => {
  const [roomData, setRoomData] = useState([]);
  const [ventData, setVentData] = useState([]);
  const [x, setXArray] = useState([]);
  const [y, setYArray] = useState([]);
  const [chart, setChart] = useState({});



  const fetchData = async () => {
    try {
      const roomsResponse = await axios.get("http://localhost:4000/rooms");
      const rooms = roomsResponse.data;
      setRoomData(rooms);

      const ventsResponse = await axios.get(
        "http://localhost:4000/ventData/ :5d498f88977f79116410691c"
      );
      const vents = ventsResponse.data;
      setVentData(vents);

      const filteredData = vents[0].data.filter(
        (subArray) =>
          subArray.length === 2 && subArray[0] >= 0 && subArray[0] <= 30
      );
      const xArray = filteredData.map((subArray) => subArray[0]);
      const yArray = filteredData.map((subArray) => subArray[1]);

      setXArray(xArray);
      setYArray(yArray);
    } catch (error) {
      console.error("Error fetching room data:", error);
      console.error("Error fetching vent data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.maincontainer}>
      <MysideNav />
      <nav className={styles.siteNavigation}>
        <div className={styles.logo}>
          <Link href="/">
            <button className={styles.logoButton}>Smart Vents</button>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/login">
            <p className={styles.button}> Log Out </p>
          </Link>
        </div>
      </nav>

      <h1>Room Data</h1>
      <table className={styles.table1}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Building</th>
            <th className={styles.th}>Floor</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {roomData.map((room) => (
            <tr key={room._id}>
              <Link href="/uservents">
                <td className={styles.td}>{room.name}</td>
              </Link>
              <td className={styles.td}>{room.building}</td>
              <td className={styles.td}>{room.floor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Vent Data</h1>
      <ul>
        {ventData.map((vent) => (
          <li key={vent._id}>
            <p>Batch: {vent.batchNo}</p>
            <p>tempIntrv: {vent.tempIntrv}</p>
            <p>Voltage Interval: {vent.voltIntrv}</p>
            <p>data: {vent.data[1]}</p>
          </li>
        ))}
      </ul>

      {/* Display x and y arrays */}
      <div className={styles.xyContainer}>
        <div className={styles.xArr}>
          <h2>X Array :</h2>
          <div className={styles.xyRow}>
            {x.map((value, index) => (
              <div key={index} className={styles.xyItem}>
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.yArr}>
          <h2>Y Array :</h2>
          <div className={styles.xyRow}>
            {y.map((val, index) => (
              <div key={index} className={styles.xyItem}>
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>      
    </div>
  );
};

export default ViewPage;

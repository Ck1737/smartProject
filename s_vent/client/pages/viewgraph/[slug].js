import React, { useEffect, useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Link from "next/link";
import styles from "./uservents.module.css";

import axios from "axios";
import withAuth from "../../../hoc/withAuth";
import MysideNav from "../../components/sideNav";
import { useRouter } from "next/router";

const Viewgraph = () => {
  const router = useRouter();
  const [roomData, setRoomData] = useState([]);
  const [ventData, setVentData] = useState([]);
  const [x, setXArray] = useState([]);
  const [y, setYArray] = useState([]);
  const { slug } = router.query;

  useEffect(() => {
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
        console.log(setVentData);

        // Filter arrays with length 2 and values less than 30, and store them in x and y
        const myArray = vents.map((vent) => vent.data);
        console.log(myArray);

        for (let i = 0; i < myArray.length; i++) {
          const subArray = myArray[i];
          console.log(subArray);
          if ((subArray.length = 2)) {
            for (let j = 0; j < subArray.length; j++) {
              if (subArray[j] < 30 && subArray[j] > 8) {
                const xArray = subArray[i];
                setXArray(xArray);
                const yArray = subArray[i + 1];
                setYArray(yArray);
              }
            }
          }
        }
        console.log(setXArray);
      } catch (error) {
        console.error("Error fetching room data:", error);
        console.error("Error fetching vent data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
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
                <td>{room.name}</td>
              </Link>
              <td>{room.building}</td>
              <td>{room.floor}</td>
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
      <h2>X Array:</h2>
      <ul>
        {x.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <h2>Y Array:</h2>
      <ul>
        {y.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Viewgraph);

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import styles from './uservents.module.css';
// import axios from 'axios';

// const HomePage = () => {
//   const [roomData, setRoomData] = useState([]);

//   const [ventData, setVentData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const roomsResponse = await axios.get('http://localhost:4000/rooms');
//         const rooms = roomsResponse.data;
//         setRoomData(rooms);
//         const ventsResponse = await axios.get('http://localhost:4000/ventData/ :5d498f88977f79116410691c');
//         const vents = ventsResponse.data;
//         setVentData(vents);

//           const myArray = vents.map((vent) => vent.data);
//           console.log(myArray);

//       }
//       catch (error) {
//         console.error('Error fetching room data:', error);
//         console.error('Error fetching vent data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>

// <nav className={styles.siteNavigation}>
//             <div className={styles.logo}>
//               <Link href="/">
//                   <button className={styles.logoButton}>Smart Vents</button>
//               </Link>
//             </div>
//             <div className={styles.menu}>
//               <Link href="/login">
//               <p className={styles.button}> Log Out </p>
//               </Link>
//             </div>
//           </nav>

//     <h1>Room Data</h1>
//               <table className={styles.table1}>
//               <thead className={styles.thead}>
//               <tr className={styles.tr}>
//               <th className={styles.th}>Name</th>
//               <th className={styles.th}>Building</th>
//               <th className={styles.th}>Floor</th>
//             </tr>
//             </thead>
//             <tbody className={styles.tbody}>
//               {roomData.map((room) => (
//                   <tr key={room._id}>
//                     <Link href="/uservents"><td>{room.name}</td></Link>
//                     <td>{room.building}</td>
//                     <td>{room.floor}</td>
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>

//       <h1>Vent Data</h1>
//           <ul>
//             {ventData.map((vent) => (
//               <li key={vent._id}>
//                 <p>Batch: {vent.batchNo}</p>
//                 <p>tempIntrv: {vent.tempIntrv}</p>
//                 <p>Voltage Interval: {vent.voltIntrv}</p>
//                 <p>data: {vent.data[1]}</p>
//               </li>
//             ))}
//           </ul>

//  {/* <h1>Vent Data</h1>
//       <ul>
//         {ventData.map((data) => (
//           <li key={data._id}>
//              Display the vent data properties here based on your 'ventData' object
//             <p>Name: {data.name}</p>
//             <p>Device ID: {data.deviceID}</p>
//           </li>
//         ))}
//       </ul>  */}

//     </div>
//   );
// };

// export default HomePage;

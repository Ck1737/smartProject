import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './uservents.module.css';
import axios from 'axios';

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);

  const [ventData, setVentData] = useState([]);

  // useEffect(() => {
  //   // Fetch the data from the backend API using Axios
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(`http://localhost:4000/vents/:64c09ea02e0537be9114f5a8`);
  //       setVentData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [] );




  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomsResponse = await axios.get('http://localhost:4000/rooms');
        const rooms = roomsResponse.data;
        setRoomData(rooms);
        const ventsResponse = await axios.get('http://localhost:4000/ventData/ :5d498f88977f79116410691c');
        const vents = ventsResponse.data;
        setVentData(vents);
        return {
          props: {
            rooms,
            vents,
          },
        };
      }catch (error) {
        console.error('Error fetching room data:', error);
        console.error('Error fetching vent data:', error);
        return {
          props: {
            rooms: [],
            vents: [],
          },
        };
      }
    };
    fetchData();
  }, []);

  return (
    <div>


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
                    <Link href="/uservents"><td>{room.name}</td></Link>
                    <td>{room.building}</td>
                    <td>{room.floor}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

      <h1>Vent Data</h1>
          <ul>
            {ventData.map((vent) => (
              <li key={vent._id}>
                <p>Batch: {vent.batchNo}</p>
                <p>tempIntrv: {vent.tempIntrv}</p>
                <p>Voltage Interval: {vent.voltIntrv}</p>
                <p>data: {vent.data}</p>
              </li>
            ))}
          </ul>  

 {/* <h1>Vent Data</h1>
      <ul>
        {ventData.map((data) => (
          <li key={data._id}>
             Display the vent data properties here based on your 'ventData' object 
            <p>Name: {data.name}</p>
            <p>Device ID: {data.deviceID}</p>
          </li>
        ))}
      </ul>  */}

   

    {/* <div>
      <h1> This is the page for the vent data and stuff</h1>

      <ul>
        {ventData.map((vent) => (
          <li key={vent._id}>
            <p>data: {vent.data}</p>
          </li>
        ))}
      </ul>
    </div>  */}

    </div>
  );
};

export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const RoomPage = () => {
//   const [roomData, setRoomData] = useState([]);
//   const [ventData, setVentData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch rooms data from the API
//         const roomsResponse = await axios.get('http://localhost:4000/rooms');
//         const rooms = roomsResponse.data;
//         setRoomData(rooms);

//         // Fetch connected vents for each room
//         const ventsPromises = rooms.map(async (room) => {
//           const ventsResponse = await axios.get(`http://localhost:4000/ventData/ :5d498f88977f79116410691c'`);
//           return ventsResponse.data;
//         });

//         const connectedVents = await Promise.all(ventsPromises);
//         setVentData(connectedVents);
//       } catch (error) {
//         console.error('Error fetching room data:', error);
//         console.error('Error fetching vent data:', error);
//         // You may handle the error accordingly or show an error message to the user
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Room Data</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Building</th>
//             <th>Floor</th>
//           </tr>
//         </thead>
//         <tbody>
//           {roomData.map((room, index) => (
//             <tr key={room._id}>
//               <td>{room.name}</td>
//               <td>{room.building}</td>
//               <td>{room.floor}</td>
//               <td>
//                 <ul>
//                   {ventData[index]?.map((vent) => (
//                     <li key={vent._id}>{vent.deviceID}</li>
//                   ))}
//                 </ul>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoomPage;
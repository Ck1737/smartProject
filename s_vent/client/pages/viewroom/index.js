import React, { useEffect, useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "../../pages/dashboard.module.css";
import axios from "axios";
import Link from "next/link";
import withAuth from "../../hoc/withAuth";
import MysideNav from "../../components/sideNav";

function ViewRoom() {
  const [selectedPage, setSelectedPage] = useState("uservents");
  const [roomData, setRoomData] = useState([]);
  const [buildingData, setBuildingData] = useState([]);
  const [showData, setShowData] = useState(false);
  //update

  const handleClick = () => {
    setShowData(!showData);
  };
  const handleSelect = (selected) => {
    setSelectedPage(selected);
  };

  const [name, setName] = useState("");
  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [vent, setVent] = useState([]);

  const [floors, setFloors] = useState("");
  const [owner, setOwner] = useState("");

  const handleLogout = () => {
    localStorage.clear();
  };

  const fetchAllVents = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/vents/${id}`);
      const data = response.data;
      setVent(data);
      console.log(vent);
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  };

  //Getting the rooms data
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/rooms");
        const data = response.data;
        setRoomData(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, []);

  //Addinng the new room
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/rooms", {
        name: name,
        building: building,
        floor: floor,
      });
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  //Deleting the room
  async function deleteRoom(id) {
    try {
      const response = await axios.delete(`http://localhost:4000/rooms/${id}`);
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  //Deleting the building
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/buildings/${id}`);
      const updatedBuildings = buildingData.filter(
        (building) => building._id !== id
      );
      setBuildingData(updatedBuildings);
    } catch (error) {
      console.error("Error deleting building:", error);
    }
  };

  return (
    <div>
      <MysideNav />
      <div div className={styles.viewroom}>
        <nav className={styles.siteNavigation}>
          <div className={styles.logo}>
            <Link href="/">
              <button className={styles.logoButton}>Smart Vents</button>
            </Link>
          </div>
          <div className={styles.menu}>
            <Link href="/login">
              <button onClick={handleLogout} className={styles.button}>
                Log Out
              </button>
            </Link>
          </div>
        </nav>

        <div className={styles.homediv}>
          <h1>Room Data</h1>
          <table className={styles.table1}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>
                  <a href="/building">Building</a>
                </th>
                <th className={styles.th}>Floor</th>
                <th className={styles.th}>Device ID</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {roomData.map((room) => (
                <tr id={room._id} key={room._id}>
                  <td>{room.name}</td>
                  <td>{room.building_details.name}</td>
                  <td>{room.floor}</td>
                  {/* <td>{room.vents}</td> */}

                  <td>
                    {" "}
                    <button
                      onClick={(e) => {
                        const id = e.target.parentElement.parentElement.id;
                        console.log(id);
                        deleteRoom(id);
                      }}
                    >
                      {" "}
                      Delete Room
                    </button>
                  </td>
                  <div id={room.vents}>
                    <button
                      onClick={(e) => {
                        const id = e.target.parentElement.id;
                        console.log(id);
                        fetchAllVents(id);
                        handleClick;
                      }}
                    >
                      Toggle Data
                    </button>{" "}
                  </div>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            {vent.map((vents) => (
              <tr key={vents._id}>
                <td>{vents.name}</td>
                <td>{vents.deviceID}</td>
              </tr>
            ))}
          </div>
        </div>

        {/* <div className={styles.homediv}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Building:
              <input
                type="text"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
              />
            </label>
            <br />
            <label>
              Floor:
              <input
                type="number"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default withAuth(ViewRoom);

import React, { useEffect, useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import "@fortawesome/fontawesome-free/css/all.css";
import styles from "./dashboard.module.css";
import axios from "axios";
import Link from "next/link";

import MysideNav from "../components/sideNav";

export default function Building() {
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

  // useEffect(() => {
  //   const fetchVents = async (id) => {
  //     try {
  //       const data = [];
  //       setVent(data);
  //     } catch (error) {
  //       console.error('Error fetching room data:', error);
  //     }
  //   };

  //   fetchVents();
  // }, []);

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
  const fetchRoomData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/rooms");
      const data = response.data;
      setRoomData(data);
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  };

  //Getting the rooms data
  useEffect(() => {
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

  //Adding the new building
  const handleSubmits = async (e) => {
    e.preventDefault();
    const owner = JSON.parse(localStorage.getItem("token"));

    try {
      const response = await fetch("http://localhost:4000/buildingsNew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, floors, owner: owner.body.user.id }),
      });

      if (response.ok) {
        // Building added successfully
        console.log("Building added to the database");
        // Reset the form fields
        setName("");
        setFloors("");
        setOwner("");
      } else {
        // Error adding the building
        console.error("Error adding the building");
      }
      fetchBuildingData();
    } catch (error) {
      console.error("An error occurred while adding the building", error);
    }
  };

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
  const fetchBuildingData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/buildings");
      const data = response.data;
      setBuildingData(data);
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  //Getting the building data
  useEffect(() => {
    fetchBuildingData();
  }, []);

  return (
    <div>
      <MysideNav />
      <div className={styles.homediv}>
        Building Page
        <div>
          <form onSubmit={handleSubmits}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Floors:
              <input
                type="number"
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
                required
              />
            </label>

            <button type="submit">Add Building</button>
          </form>
        </div>
        <h1>Building Data</h1>
        <table className={styles.table1}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Floors</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {buildingData.map((building) => (
              <tr key={building._id}>
                <td>{building.name}</td>
                <td>{building.floors}</td>
                <td>
                  <p>
                    <button onClick={() => handleDelete(building._id)}>
                      Delete Building
                    </button>
                  </p>
                  <p>
                    <Link href={`/viewroom/${building._id}`}>View Rooms</Link>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ); // Replace with your actual component for Building Page
}

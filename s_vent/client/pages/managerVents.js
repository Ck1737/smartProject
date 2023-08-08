import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './uservents.module.css';
import axios from 'axios';

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);
  const [buildingData, setBuildingData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/rooms');
        const data = response.data;
        setRoomData(data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, []);

  useEffect(() => {
    const fetchBuildingData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/buildings');
        const data = response.data;
        setBuildingData(data);
      } catch (error) {
        console.error('Error fetching building data:', error);
      }
    };

    fetchBuildingData();
  }, []);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user');
        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

    //AXIOS.PATCH INSTEAD OF AXIO.GET
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/vents', { name });
      console.log(response.data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting the form.");
    }
  };

  useEffect(() => {
    if (success) {
      console.log("Data submitted successfully");
    }
  }, [success]);

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
      <ul>
        {roomData.map((room) => (
          <li key={room._id}>
            <p>Name: {room.name}</p>
            <p>Building: {room.building}</p>
            <p>Floor: {room.floor}</p>
          </li>
        ))}
      </ul>

      <h1>Building Data</h1>
      <ul>
        {buildingData.map((building) => (
          <li key={building._id}>
            <p>Name: {building.name}</p>
            <p>Floors: {building.floors}</p>
          </li>
        ))}
      </ul>

      <h1>User Data</h1>
      <ul>
        {userData.map((user) => (
          <li key={user._id}>
            <p>Name: {user.firstName}</p>
            <p>Floors: {user.lastName}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ul>

      <h1>Submit Vent Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default HomePage;
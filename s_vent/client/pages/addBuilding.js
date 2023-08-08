import Link from "next/link";
import styles from "./contact.module.css";
import { FaHome, FaPhone, FaEnvelope, FaFax } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MysideNav from "../components/sideNav";

const addBuilding = () => {
  const [buildingData, setBuildingData] = useState([]);

  const handleLinkClick = () => {
    window.location.href = "/uservents";
    window.location.href = "/uservents";
  };

  // useEffect(() => {
  //   const fetchBuildingData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/buildings');
  //       const data = response.data;
  //       setBuildingData(data);
  //     } catch (error) {
  //       console.error('Error fetching building data:', error);
  //     }
  //   };

  //   fetchBuildingData();
  // }, []);

  useEffect(() => {
    const fetchBuildingData = async () => {
      try {
        //const response =
        await axios
          .post("http://localhost:4000/buildings", {
            id: "6492739d625cd683ff5a98f7",
          })
          .then(
            (response) => {
              console.log(response.data);
              var data = response.data;
              setBuildingData(data);
            },
            (error) => {
              console.log(error);
            }
          );
        //const data = response.data;
        //setBuildingData(data);
      } catch (error) {
        console.error("Error fetching building data:", error);
      }
    };

    fetchBuildingData();
  }, []);

  //fetching the vent data
  useEffect(() => {
    const fetchVentData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/buildings");
        const data = response.data;
        setBuildingData(data);
      } catch (error) {
        console.error("Error fetching building data:", error);
      }
    };

    fetchVentData();
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
            <p className={styles.button}> Login </p>
          </Link>
          <Link href="/signup">
            <p className={styles.button}> Sign Up </p>
          </Link>
          <Link href="/contact">
            <p className={styles.button}> Conatct Us </p>
          </Link>
          <Link href="/about">
            <p className={styles.button}> About Us </p>
          </Link>
        </div>
      </nav>

      {/* displaying the building data */}

      <h1>Building Data</h1>
      <ul>
        {buildingData.map((building) => (
          <li key={building._id}>
            <p>Name: {building.name}</p>
            <p>Floors: {building.floors}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>
          <Link href="/viewVents">View Vents</Link>
        </p>
        <a onClick={handleLinkClick}></a>
      </div>

      <div>
        <footer className={styles.footer}>
          <div className={styles.column}>
            <h3 id={styles.h3f}>About Us</h3>
            <p id={styles.pf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consequat tellus eget sapien mollis, eu efficitur orci aliquet.
            </p>
          </div>

          <div className={styles.column}>
            <h3 id={styles.h3f}>Support</h3>
            <ul id={styles.ulf}>
              <li id={styles.lif}>How to Install</li>
              <li id={styles.lif}>FAQ</li>
              <li id={styles.lif}>Published Research</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 id={styles.h3f}>Company</h3>
            <ul id={styles.ulf}>
              <li id={styles.lif}>
                <a href="/" id={styles.af}>
                  Home
                </a>
              </li>
              <li id={styles.lif}>
                <a href="/about" id={styles.af}>
                  About Us
                </a>
              </li>
              <li id={styles.lif}>
                <a href="/contact" id={styles.af}>
                  Contact Us
                </a>
              </li>
              <li id={styles.lif}>
                <a href="/services" id={styles.af}>
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 id={styles.h3f}>Contact Us</h3>
            <ul id={styles.ulf}>
              <li id={styles.lif}>
                <FaHome className={styles.icon} />
                123 Main Street, City, Country
              </li>
              <li id={styles.lif}>
                <FaPhone className={styles.icon} />
                +123 456 7890
              </li>
              <li id={styles.lif}>
                <FaEnvelope className={styles.icon} />
                info@example.com
              </li>
              <li id={styles.lif}>
                <FaFax className={styles.icon} />
                +123 456 7891
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default addBuilding;

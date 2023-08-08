import Link from 'next/link';
import styles from './technicianVentInfo.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

function Technician() {

  const [content, setContent] = useState('');

  const handleLinkClick = () => {
    window.location.href = '/uservents';
    window.location.href = '/uservents';
  };

  // const loadPage = (pageUrl) => {
  //   fetch(pageUrl)
  //     .then(response => response.text())
  //     .then(data => setContent(data))
  //     .catch(error => console.log(error));
  // };


    return (
<div className={styles.backgrd}>
      <nav className={styles.siteNavigation}>
        <div className={styles.logo}>
          <Link href="/">
              <button className={styles.logoButton}>Smart Vents Technician page</button>
          </Link>
        </div>
        <div className={styles.menu}>
        <Link href="/login">
            <p className={styles.button}> Login </p>
            </Link>
            <Link href="/signup">
            <p className={styles.button}> Sign Up </p>
            </Link>
        </div>
      </nav>

      <p>This will be the technician vent info page and is under working</p>

    <div className={styles.diffdivs}>
      <div className={styles.itemdiv1} >
        <nav className={styles.siteNavigation}>
            <div className={styles.container}>
            <Link href="/uservents" >
              <a onClick={handleLinkClick}></a>
            <p className={styles.buttonIN}> View Building </p>
            </Link>
            <Link href="/addBuilding" >
              <a onClick={handleLinkClick}></a>
            <p className={styles.buttonIN}> Add Building </p>
            </Link>
            <Link href="/uservents" >
              <a onClick={handleLinkClick}></a>
              <p className={styles.buttonIN}> Add room </p>
            </Link>
            </div>
        </nav>
      </div>
      <div className={styles.itemdiv2}>
        
      </div>
    </div>
  </div>
    );  
  }
  
  export default Technician;
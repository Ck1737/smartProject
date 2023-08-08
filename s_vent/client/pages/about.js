import Link from 'next/link';
import styles from './about.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';


function AboutUs() {
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

      <h1>About us</h1>
      <h2>The Founder</h2> 
     
      <p>Hi, I am Moustapha. A software developer is a professional 
        who designs, creates, and maintains software applications. 
        They are skilled in programming languages and frameworks 
        and are responsible for translating user requirements 
        into functional and efficient software solutions. 
        Here's a typical biography of a software developer:
        I am Moustapha a highly skilled software developer with
        a passion for creating innovative and user-friendly applications. 
        With more than 10 years of experience in the field, they have a 
        strong foundation in software development principles and practices.</p>

      
        <p>This is our innovative website named Smart vents which connects
          the vents with app web application and give the all 
          information about vent status.
          SmartLabs wishes to circumvent the wasted energy problem by developing a way to monitor
          energy consumption of each individual room within a home. The project will provide building
          owners with a way to view the consumption data and a way to control their heating system
          remotely. The project consists of two parts: the web and the server which will be connected
          to the various parts of the system: the database, the web pages, and the vents within the
          owner’s building. </p>

          <h1> Technology -Everything in today's world.....</h1>

          <p>The Smart Heat Control System will be implemented in homes, corporate facilities, and
          public institutions. The system will consist of existing hardware from Smart Labs and
          previous project groups, and the web/mobile interface our group will create. The group will
          also create and implement a server and a database for the system. The web should be
          accessible anywhere the user or building owner is, as long as they have an internet
          connection. The current general heating system for an average home is a central furnace that blows
          warm air into connected vents which circulates the air throughout the building. The furnace is
          connected to a thermometer which becomes active when the temperature reaches a
          minimum temperature threshold. With the current system, each room receives the same
          amount of heat. The problem with this system is that not all rooms are occupied at any given
          time. Some rooms are unoccupied for extended periods of time, for example: the living room
          during the night when the homeowners would be asleep. This means that with the current
          system, as all rooms are given the same amount of warm air, energy is wasted on heating
          up the rooms during long unoccupied periods. </p> 




      <div>
            <footer className={styles.footer}>
        <div className={styles.column}>
          
          <h3 id={styles.h3f}>About Us</h3>
          <p id={styles.pf}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat
            tellus eget sapien mollis, eu efficitur orci aliquet.
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
              <a href="/" id={styles.af}>Home</a>
            </li>
            <li id={styles.lif}> 
              <a href="/about" id={styles.af}>About Us</a>
            </li>
            <li id={styles.lif}>
              <a href="/contact" id={styles.af}>Contact Us</a>
            </li>
            <li id={styles.lif}>
              <a href="/services" id={styles.af}>Services</a>
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
  }
  
  export default AboutUs;
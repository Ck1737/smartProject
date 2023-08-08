import Link from 'next/link';
import styles from './index.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';




function IndexPage() {
    return (
      <div className={styles.main}>
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
    

        <div className={styles.overlay}></div>
    
        <div className={styles.content}>
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    


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

 

export default IndexPage;
import Link from 'next/link';
import styles from './contact.module.css';
import { FaHome, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';


function Technican() {
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
        </div>
      </nav>

      <p>This will be the admin vent info page and is under working</p>

      </div>
    );
  }
  
  export default Technican;
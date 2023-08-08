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
import styles from "../pages/dashboard.module.css";


import Link from "next/link";

export default function MysideNav() {
  return (
    <div>
      <div className={styles.container}>
        <SideNav className={styles.sidebar}>
          <SideNav.Toggle className={styles.toggle} />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="uservents" className={styles.navItem}>
              <NavIcon>
                <i
                  className="fa-brands fas fa-space-awesome"
                  style={{ fontSize: "1.5em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="building" className={styles.navItem}>
              <NavIcon>
                <i
                  className="fas fa-building-shield"
                  style={{ fontSize: "1.5em" }}
                />
              </NavIcon>
              <NavText>
                <Link href="building">Building</Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="viewroom" className={styles.navItem}>
              <NavIcon>
                <i className="fas fa-house" style={{ fontSize: "1.5em" }} />
              </NavIcon>
              <NavText>
                <Link href="viewroom">View Room</Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="viewgraph" className={styles.navItem}>
              <NavIcon>
                <i
                  className="fas fa-line-chart"
                  style={{ fontSize: "1.5em" }}
                />
              </NavIcon>
              <NavText>
                <Link href="viewgraph">View Graph</Link>
              </NavText>
            </NavItem>
            {/* <NavItem eventKey="settings" className={styles.navItem}>
              <NavIcon>
                <i className="fas fa-gear" style={{ fontSize: "1.5em" }} />
              </NavIcon>
              <NavText>Settings</NavText>
            </NavItem> */}
          </SideNav.Nav>
        </SideNav>
      </div>
    </div>
  ); // Replace with your actual component for Building Page
}

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { FaHome, FaPhone, FaEnvelope, FaFax } from "react-icons/fa";
import styles from "./login.module.css";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState({});
  // const [isSubmitted, setSubmitted] = useState(false);
  // const { errorMessage, isSubmitted } = useLogin();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(email, password);
      axios
        .post("http://localhost:4000/login", {
          email: email,
          password: password,
        })
        .then(
          async (response) => {
            console.log(response.data);

            if (response.data.message === "logged in") {
              await localStorage.setItem(
                "token",
                JSON.stringify(response.data)
              );
              router.push("/dashboard");
            } else {
              setErrorMessage({
                name: "login",
                message: "Invalid Credentails",
              });
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.error("Error occurred while fetching user data:", error);
      setErrorMessage({ name: "login", message: "Internal server error" });
    }
  };

  const renderForm = (
    <div>
      <div>
        <h1 className={styles.title}>Login</h1>
        {errorMessage && <div>{errorMessage.message}</div>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputcontainer}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              name="uname"
              required
              onChange={(e) => setEmail(e.target.value)}
              className={styles.label}
            />
          </div>
          <div className={styles.inputcontainer}>
            <label htmlFor="Password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
              className={styles.label}
            />
          </div>
          <div className={styles.buttoncontainer}>
            <input type="submit" value="Login" className={styles.button} />
          </div>
        </form>
        <Link href="/forgotpass" className={styles.fgtpass}>
          Forgot Password?
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <nav className={styles.siteNavigation}>
        <div className={styles.logo}>
          <Link href="/">
            <button className={styles.logoButton}>Smart Vents</button>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/">
            <p className={styles.btnMenu}> Home </p>
          </Link>
          <Link href="/signup">
            <p className={styles.btnMenu}> Sign Up </p>
          </Link>
          <Link href="/contact">
            <p className={styles.btnMenu}> Contact Us </p>
          </Link>
          <Link href="/about">
            <p className={styles.btnMenu}> About Us </p>
          </Link>
        </div>
      </nav>
      <div className={styles.app}>
        <div className={styles.addimage}>
          <img src="ventImage.png" alt="ventImage" />
          <div className={styles.addTextonImage}>
            <p>Less pollution, less radiation, healthier home</p>
          </div>
        </div>
        <div className={styles.loginform}>
          {/* <div className={styles.title}>Login</div> */}
          {renderForm}
        </div>
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
}

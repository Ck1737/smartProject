import React, { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import Link from "next/link";
import { FaHome, FaPhone, FaEnvelope, FaFax } from "react-icons/fa";
import { useSignup } from "../hooks/useSignUp";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [role, setRole] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    try {
      console.log(email, password);
      axios
        .post("http://localhost:4000/user", {
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then(
          async (response) => {
            console.log(response);
            if (response.data === "user Created") {
              router.push("/login");
            } else {
              setErrorMessage({
                name: "user",
                message: response.data,
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

  return (
    //navigation bar code
    <div>
      <nav className={styles.siteNavigation}>
        <div className={styles.logo}>
          <Link href="/">
            <button className={styles.logoButton}>Smart Vents</button>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/login">
            <p className={styles.btnMenu}> Login </p>
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

      <div className={styles.background}>
        <div className={styles.addimage}>
          <img src="ventImage.png" alt="ventImage" />
          <div className={styles.addTextonImage}>
            <p>Less pollution, less radiation, healthier home</p>
          </div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>Sign Up</h1>
          {errorMessage && <div>{errorMessage.message}</div>}
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.input}
            />
            {errors.username && (
              <span className={styles.error}>{errors.username}</span>
            )}
            <label htmlFor="firstName" className={styles.label}>
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="lastName" className={styles.label}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />

            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />

            {errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
            <input
              type="submit"
              value="Sign Up"
              className={styles.button}
              onClick={(e) => useSignup()}
            />
          </form>

          {isSubmitted && (
            <div className={styles.successMessage}>
              <p>Your account has been successfully created!</p>
              <p>Name: {submittedUsername}</p>
              <p>Email: {submittedEmail}</p>
            </div>
          )}
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
};
export default SignUpPage;

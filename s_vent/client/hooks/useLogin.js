import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const useLogin = () => {
  // const [isSubmitted, setSubmitted] = useState(false);
  const login = async (email, password) => {
    try {
      console.log(username, password);
      axios
        .post("http://localhost:4000/login", {
          email: username,
          password: username,
        })
        .then(
          async (response) => {
            console.log(response.data.body.token);
            if (response.data.message === "logged in") {
              // useLogin();
              await localStorage.setItem("token", response.data);
              return true;
            } else {
              setErrorMessage({ name: "login", message: message });
              return false;
            }
          },
          (error) => {
            console.log(error);
            return error;
          }
        );
    } catch (error) {
      setErrorMessage({ name: "login", message: message });
      console.error("Error occurred while logging in:", error);
      setErrorMessage("Internal server error");
    }
  };

  return { login };
};

export default useLogin;

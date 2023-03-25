import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Finding from "../components/img/finding.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GoogleButton } from "react-google-button";
import { auth, provider } from "../components/auth/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const [text] = useTypewriter({
    words: ["New Business", "New Community", "New Time Smart"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleClick = async () => {
    try {
      signInWithPopup(auth, provider).then((data) => {
        setCurrentUser(data.user.email);
        localStorage.setItem("email", data.user.email);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify("1"));
  }, []);

  let navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      return navigate("/UserHomepage");
    }
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <div className="mt-5 w-full">
        <div className="">
          <div className="mx-5 flex flex-col gap-5">
            <h4 className="text-lg font-normal">WELCOME TO NEW ERA</h4>
            <h1 className="text-6xl font-bold">This is area for</h1>
            <h2 className="text-4xl font-bold text-orange-700">
              {text}
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
            <h3 className="mt-10 text-3xl font-bold">
              The new way of approaching whom they are expert
            </h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nulla turpis, cursus fringilla accumsan sed, auctor quis est.
              Aenean ut accumsan sem. Vivamus vel leo in est hendrerit tempus
              vel vel ex. Ut a lacus eu tellus luctus tincidunt sed quis dolor.
            </span>
            <div className="">
              <GoogleButton onClick={handleClick} />
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <img src={Finding} alt="Finding" className="w-2/3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

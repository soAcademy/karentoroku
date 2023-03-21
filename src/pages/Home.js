import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import Finding from "../components/img/finding.png"
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["New Business", "New Community", "New Time Smart"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const clientId =
    "535874581448-8fdlid2gjtsh3a9n69h3o97ti3kf0bul.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    console.log("success", res);
  };

  const onFailure = (res) => {
    console.log("failed", res);
  };

  return (
    <>
      <Navbar />
      <div className="w-full mt-5">
        <div className="">
          <div className="flex flex-col gap-5 mx-5">
            <h4 className="text-lg font-normal">
              WELCOME TO NEW ERA
            </h4>
            <h1 className="text-6xl font-bold">
              This is area for
            </h1>
            <h2 className="text-4xl font-bold">
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
            <div className="ml-5">
              <GoogleLogin
                clientId={clientId}
                buttonText="Log in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
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
import React, { useState, useEffect } from "react";
import UserNavbar from "../components/navbar/UserNavbar";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { auth } from "../components/auth/config";

const UserHomepage = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("status"));
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        // console.log(user);
        // console.log("uid", uid);
        auth.currentUser
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            // Send token to your backend via HTTPS
            // ...
            // console.log(idToken);
            axios
              .post("http://localhost:8000/createUser", {
                idToken: idToken,
                name: "korayut001",
                username: "abc123001"
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            // Handle error
            console.log(error);
          });
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  //Test

  useEffect(() => {
    setValue(localStorage.getItem("status"));
  }, []);

  let navigate = useNavigate();
  if (!value) {
    return navigate("/");
  }

  const newEvent = () => {
    navigate("/EventType");
  };

  const scheduledEvent = () => {
    navigate("/ScheduledEvents");
  };

  const toHome = () => {
    navigate("/UserHomepage");
  };

  const toCustomerBooking = () => {
    navigate("/CustomerBooking");
  };

  return (
    <>
      <UserNavbar />
      <div className="mt-5">
        <span className="mx-5 text-2xl">KARENTOROKU</span>
        <div className="border-gray mt-8 flex space-x-5 border-b-[2px] p-2">
          <div
            className="ml-3 cursor-pointer duration-300 font-bold"
            onClick={toHome}
          >
            Event Types
          </div>
          <div
            className="cursor-pointer duration-300 hover:font-bold"
            onClick={scheduledEvent}
          >
            Scheduled Events
          </div>
        </div>
        <div className="border-gray flex items-center space-x-16 border-b-[2px]">
          <div className="my-6 ml-5 text-6xl">
            <BsPerson />
          </div>
          <div>
            <p className="text-xl">username</p>
            <p className="text-xl text-orange-700">karentoroku.com/username</p>
          </div>
        </div>
        <div className="text-center">
          <button
            className="my-5 rounded-full border-2 px-60 py-5 text-center text-xl"
            onClick={newEvent}
          >
            + New Event Type
          </button>
        </div>
        <div className="mx-5 mt-5 border-2 border-orange-200 bg-orange-200 pl-5 pt-10">
          <p className="text-2xl">Meeting 30 min</p>
          <p className="mt-2 text-gray-500">30mins, One-on-One</p>
          <p
            className="my-10 cursor-pointer text-lg text-orange-700"
            onClick={toCustomerBooking}
          >
            view booking page
          </p>
        </div>
        <div className="mx-5 mt-0.5 flex items-center justify-around border-2 border-orange-200 bg-orange-200 py-2">
          <p className="text-lg">Copy Link</p>
          <button className="rounded-full border-2 border-orange-700 bg-white px-10 py-3 text-lg">
            Share
          </button>
        </div>
        <div className="mx-5 mt-5 border-2 border-orange-200 bg-orange-200 pl-5 pt-10">
          <p className="text-2xl">Meeting 30 min</p>
          <p className="mt-2 text-gray-500">30mins, One-on-One</p>
          <p
            className="my-10 cursor-pointer text-lg text-orange-700"
            onClick={toCustomerBooking}
          >
            view booking page
          </p>
        </div>
        <div className="mx-5 mt-0.5 flex items-center justify-around border-2 border-orange-200 bg-orange-200 py-2">
          <p className="text-lg">Copy Link</p>
          <button className="rounded-full border-2 border-orange-700 bg-white px-10 py-3 text-lg">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default UserHomepage;

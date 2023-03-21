import React, { useState, useEffect } from "react";
import Logo from "../components/img/logocolor.png";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const Login = () => {
const [profile, setProfile] = useState(null)

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
    setProfile(res.profileObj);
    console.log("success", res);
  };

  const onFailure = (res) => {
    console.log("failed", res);
  };

  const logOut = () => {
    setProfile(null)
  }

  return (
    <>
      <br /><br />
      {profile ? (
        <div>
          <img src={profile.imageUrl} alt="user image"/>
          <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut}/>
        </div>
      ) : (
        <>
        <div className="mt-20 w-full">
        <div className="flex items-center justify-center">
          <div>
            <Link to="/">
            <img src={Logo} alt="Company Logo" className="w-48 bg-white" />
            </Link>
          </div>
          <Link to="/">
          <h1 className="text-4xl font-bold">KARENTOROKU</h1>
          </Link>
        </div>
        <div className="p-3 text-center text-2xl">
          Log into your Karentoroku account
        </div>
      </div>
      <div className="m-auto mt-20 rounded-xl bg-gray-100 p-4 sm:w-4/5 md:w-3/4 lg:w-1/2 2xl:w-2/6">
        <label className="mt-3">Enter your email to get started</label>
        <input
          type="email"
          name="email"
          className="mt-4 w-full rounded-xl p-3"
          placeholder="email address"
        />
        <button className="mt-5 w-full rounded-full bg-orange-700 p-5 text-xl text-white">
          Continue
        </button>
        <div className="text-center mt-10">
          <GoogleLogin 
          clientId={clientId}
          buttonText="Log in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          />
        </div>
        <div className="mt-20 flex">
          <div>Don't have an account?</div>
          <Link to="/GetStart" className="ml-2 text-blue-600">
            Sign up
          </Link>
        </div>
      </div>
      </>
      )}
    </>
  );
};

export default Login;

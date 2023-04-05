// https://www.robinwieruch.de/react-router-authentication/
// https://dev.to/jsbroks/firebase-authentication-with-react-and-guarded-routes-41nm
import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/auth/config";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [idToken, setIdToken] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        auth.currentUser
          .getIdToken(/* forceRefresh */ true)
          .then((idToken) => {
            setIdToken(idToken);
          })
          .catch((error) => {
            // Handle error
            console.log(error);
          });
        console.log(`user with ID ${user.uid} is logged in`);
      } else {
        // User is signed out
        setIdToken(null);
        console.log("user is logged out");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, idToken }}>
      {children}
    </AuthContext.Provider>
  );
};

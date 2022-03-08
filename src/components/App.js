import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { auth, authService} from "fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
const [init, setInit] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userObj, setUserObj] = useState(null);

useEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    //로그인 시 가장 먼저 호출 됨.onAuthStateChanged
    if (user) {
      setIsLoggedIn(true);
      // const uid = user.uid;
      setUserObj(user)
    } else {
      setIsLoggedIn(false);
    }
      setInit(true);
  });
}, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;

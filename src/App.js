import React, {useState, useEffect} from "react"
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase";
import pathElement from "./pathElementMapping";
import Header from "./page-components/Header";
import {TopLayer, helper} from "./context/TopLayer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [cartItem, setCartItem] = useState({});
  const [authUser, setAuthUser] = useState(null);
  const contextValue = {
    cartItem,
    setCartItem,
    authUser,
    setAuthUser,
    ...helper,
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user)=>{
      if(user){
        setAuthUser(user);
      }else{
        setAuthUser(null);
      }
    })
    return listen();
  }, []);

  console.log("authUser", authUser);
  return (
  <TopLayer.Provider value={contextValue}>
    <Router>
      <Routes>
        {pathElement.map((itm)=>{
          return (
            <Route 
              path={itm.path}
              element={
                <div>
                  {itm.showHeader && <Header />}
                  {itm.element}
                </div>
              }
            />
          )
        })}
      </Routes>

    </Router>
  </TopLayer.Provider>
  );
}

export default App;

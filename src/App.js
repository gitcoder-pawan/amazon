import React, {useState} from "react"
import pathElement from "./pathElementMapping";
import Header from "./page-components/Header";
import {TopLayer, helper} from "./context/TopLayer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [cartItem, setCartItem] = useState({});
  const contextValue = {
    cartItem,
    setCartItem,
    ...helper,
  }
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

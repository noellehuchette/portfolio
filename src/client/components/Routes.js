import React from "react";
import Home from './Home/index';
import { Route, Routes } from "react-router-dom";

const Router = (props) => {
  return (
    <div className='content'>
      <Routes>
        <Route 
          exact path='/' 
          element={<Home />} 
        />
      </Routes>
    </div>
);  
};

export default Router;
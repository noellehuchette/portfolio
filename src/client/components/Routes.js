import React from 'react';
import Home from './Home/index';
import Projects from './Projects';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

const Router = (props) => {
  return (
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;

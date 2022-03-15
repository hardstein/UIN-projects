import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Actors from "../componenets/Actors";
import Movies from "../componenets/Movies";
import Navbar from "../componenets/Navbar";

import Home from "../pages/Home";

function RouterPage({movies, actors}) {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies}/>} />
          <Route path="/actors" element={<Actors actors={actors}/>} />
        </Routes>
      </BrowserRouter>
    

    </>
  );
}

export default RouterPage;

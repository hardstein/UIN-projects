import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Actor from "../componenets/Actor";
import Actors from "../componenets/Actors";
import Movies from "../componenets/Movies";
import Navbar from "../componenets/Navbar";

import Home from "../pages/Home";

function RouterPage({ movies, actors }) {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/actors">
            <Route index element={<Actors actors={actors} />} />
            <Route path=":name" element={<Actor />}></Route>
          </Route>
        </Routes>
    </>
  );
}

export default RouterPage;

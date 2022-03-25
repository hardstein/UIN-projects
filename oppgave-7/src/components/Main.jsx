import React from 'react'
import { useState, useEffect } from 'react';
import Search from './Search';
import Movies from './Movies';

function Main() {
    const apikey = `
    http://www.omdbapi.com/?apikey=3ec886d7&t=
  `;
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const submitSearch = () => {
    setSearch(searchInput);
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchOmDB = async () => {
      setLoading(true);
      if (search !== "") {
        const response = await fetch(apikey + search);
        const data = await response.json();
        const mergedData = [...movies, data];
        setMovies(mergedData);
      }
      setLoading(false);
    };
    fetchOmDB();
  }, [search]);

  return (
    <main className="container">
      <Search handleSearch={handleSearch} submitSearch={submitSearch} />
      <p className="loading">{loading ? "loading..." : null}</p>
      <Movies movies={movies} />
    </main>
  )
}

export default Main
function Search({ handleSearch, submitSearch }) {
  return (
    <div className="search">
      <label htmlFor="search">Search</label>
      <input type="text" name="search" onChange={handleSearch} />

      <button type="submit" onClick={submitSearch}>
        Search
      </button>

      <p>Search history:</p>
    </div>
  );
}

export default Search;

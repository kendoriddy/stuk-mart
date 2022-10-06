import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterCompany } from '../redux/Stock';
import '../css/search.css';

const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterCompany(''));
  }, [dispatch]);
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(filterCompany(e.target.value));
  };
  return (
    <div className="search-name">
      <input
        id="search"
        className="px-2"
        placeholder="Search company by name..."
        value={search}
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

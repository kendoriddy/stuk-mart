import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterCompany } from '../redux/Stock';
import '../css/search.css';

const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterCompany(''));
  }, []);
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(filterCompany(e.target.value));
  };
  return (
    <>
      <input
        id="search"
        className="px-2"
        placeholder="Search company name..."
        value={search}
        type="search"
        onChange={handleChange}
      />
    </>
  );
};

export default Search;

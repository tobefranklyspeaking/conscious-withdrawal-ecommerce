import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import axios from 'axios';

const SearchBarStyle = styled.input`
  margin: 10px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid white;
  color: white;
`;

const SearchButton = styled.button`
width: 33px;
height: 33px;
border: 0;

  padding-bottom: 0;
`;

// This will be the live results filtered
const Text = styled.div`
  height: auto;
  width: auto;
  padding: 10px;
  background-color: white;
  border: 2px solid black;
  border-top: 0;
`;

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [allSuggestions, setAllSuggestions] = useState(allProducts);

  useEffect(async () => {
    await axios.get('/products/?count=1100')
      .then(response => {
        setAllProducts(response.data);
        setAllSuggestions(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(`Error in SearchBar useEffect: ${err}`));
  }, [])

  const handleClick = async () => {
    // This will allow the user to submit search

    console.log('handleClick clicked')
  }

  const onChange = (searchText) => {
    setSearch(searchText);
  }

  return (
    <>
      <div>
        <SearchBarStyle
          type='text'
          style={{ marginTop: 10 }}
          value={search}
          onChange={e => onChange(e.target.value)} />
        <span>
          <CgSearch style={{ size: 18, color: 'white' }} onClick={() => handleClick()} />
        </span>
      </div>
      <Text>{allProducts.map((value, i) => {
        if (search.length > 3) {
          return (
            <div key={value.id}>
              <Text>{value.name}</Text>
            </div>
          )
        }
      })}</Text>
    </>
  )
}

export default SearchBar;
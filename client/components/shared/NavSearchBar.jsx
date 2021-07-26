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

const Filtered = styled.div`
  height: auto;
  width: auto;
  padding: 5px;
  background-color: white;
`;

const List = styled.div`
  height: auto;
  max-height 300px;
  overflow-y: scroll;
`;


const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [allProducts, setAllProducts] = useState([]);

  useEffect(async () => {
    await axios.get('/products/?count=1100')
      .then(response => {
        setAllProducts(response.data);
      })
      .catch(err => console.log(`Error in SearchBar useEffect: ${err}`));
  }, [])

  const handleClick = async () => {
    // This will allow the user to submit search

    console.log('handleClick clicked')
  }

  const onChange = (searchText) => {
    setSearch(searchText.toLowerCase());
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
      <List>
        {
          allProducts.filter(text => {
            if (search.length > 2) {
              if (text.category.toLowerCase().indexOf(search) !== -1 || text.description.toLowerCase().indexOf(search) !== -1 || text.name.toLowerCase().indexOf(search) !== -1) {
                return true;
              } else {
                return false
              }
            }
          }).map((value) => {
            return (
              <div key={value.id}>
                <Filtered>{value.name}</Filtered>
              </div>
            )
          })
        }
      </List>
      </div>
    </>
  )
}

export default SearchBar;
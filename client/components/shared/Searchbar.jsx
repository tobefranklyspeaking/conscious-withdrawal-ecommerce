import React from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';

const SearchBarStyle = styled.input`
  margin: 10px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid white;
  color: white;
`;

// const icon = styled.img`

// `;

const SearchBar = () => {
  return (
    <>
      <SearchBarStyle/>
      <CgSearch style={{color:'white'}}/>
    </>
  )
}
//need to create actual searchbar component

export default SearchBar;
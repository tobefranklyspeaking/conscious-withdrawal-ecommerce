import React from 'react';
import SearchBar from './Searchbar.jsx'
import styled from 'styled-components';
//em or vh
const NavStyle = styled.header`
  height: 6.5vh;
  max-width: 1280px;
  background-color: #555555;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 22px;
  padding-right: 22px;
`;

const Logo = styled.span`
  margin-right: auto;
  color: white;
  font-size: 18px;
  font-family: Arial;
  font-style: italic;
  font-weight: 850;
  text-decoration: underline;
`;

const NavBar = () => {

  return (
    <NavStyle>
      <Logo>Logo</Logo>
      <SearchBar />
    </NavStyle>
  );
}

export default NavBar;
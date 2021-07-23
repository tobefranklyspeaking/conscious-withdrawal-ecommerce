import React from 'react';
import styled from 'styled-components';


const NavStyle = styled.header`
  height: 60px;
  width: auto%;
  background-color: #5a5a5a;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 19px;
  padding-right: 19px;
`;

const Logo = styled.span`
  margin-right: auto;
  color: white;
  font-size: 20px;
  font-family: Arial;
  font-style: italic;
  font-weight: 850;
  text-decoration: underline;
`;

const NavBar = () => {

  return (
    <NavStyle>
      <Logo>Logo</Logo>
      <div>
        <input className='searchBar'></input>
        <a href="#">🔍</a>
      </div>
    </NavStyle>
  );
}

export default NavBar;
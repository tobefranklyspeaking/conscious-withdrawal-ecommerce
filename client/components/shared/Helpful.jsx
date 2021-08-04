import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
/*
const Button = styled.button`
   background-color: Transparent;
  outline: none;
  border: none;
  text-decoration: underline;
  &:hover.helpfulButton {
    color: blue;
  }
  border: 1px solid black;
`;
*/

const Helpful = ({ path, id, helpfulness, currentSort }) => {
  const [isHelpful, setIsHelpful] = useState(helpfulness);
  const [isClicked, setIsClicked] = useState(false);
  const [sort, setSort] = useState(currentSort);

  useEffect(() => {
    if (isHelpful !== helpfulness) {
      const putHelpful = async () => {
        let res = await axios.put(`${path}/${id}/helpful`);
      };
      putHelpful();
      setIsClicked(true);
      // putHelpful();
    }
  });


  useEffect(async () => {
    setIsHelpful(helpfulness);
    setSort(currentSort);
    //setIsClicked(false);
  }, [currentSort]);



  return (
    <>
      <span>Helpful? </span>
      <button className="helpfulButton" onClick={() => isClicked ? console.log('already clicked') : setIsHelpful(isHelpful + 1)}>Yes</button>
      <span>({isHelpful})</span>
    </>
  );

};

export default Helpful;
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

const Button = styled.button`
  background-color: Transparent;
  outline: none;
  border: none;
  text-decoration: underline;
  &:hover.helpfulButton {
    color: blue;
  }
`;


const Helpful = ({path, id, helpfulness}) => {
  //set state
  const [isHelpful, setIsHelpful] = useState(helpfulness);
  const [isClicked, setIsClicked] = useState(false);
  console.log('helpfulness: ', helpfulness);

  //styled components
  //need wrapper span
  //need button

  useEffect(() => {
    if (isHelpful !== helpfulness) {
      setIsClicked(true);
      const putHelpful = async () => {
        let res = await axios.put(`${path}/${id}/helpful`);
        //setIsClicked(true);
        console.log('successful get current helpfullness: ');
      };
      putHelpful();
    }
  });



  return (
    <>
    <span>Helpful? </span>
    <Button className="helpfulButton" onClick={() => (isClicked ? console.log('already clicked') : setIsHelpful(isHelpful + 1))}>Yes</Button>
    <span>({isHelpful})</span>
    </>
  );

};

export default Helpful;
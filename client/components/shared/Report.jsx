import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

// const Button = styled.button`
//   background-color: Transparent;
//   outline: none;
//   border: none;
//   text-decoration: underline;
//   &:hover.reportButton {
//     color: blue;
//   }
//   border: 1px solid black;
// `;


const Report = ({path, id}) => {
  //set state
  const [Reported, setIsReported] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //styled components

  useEffect(() => {
    if (Reported === true) {
      setIsClicked(true);
      const putReported = async () => {
        let res = await axios.put(`${path}/${id}/report`);
        //setIsClicked(true);
        console.log('successful get current reported: ');
      };
      putReported();
    }
  });


  return (
    <>
    <button className="reportButton" onClick={() => (isClicked ? console.log('already clicked') : setIsReported(true))}>Report</button>
    </>
  )

};

export default Report;
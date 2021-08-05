import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const ContainerStyles = styled.div`
  order: 2;
  height: 50%;
  width: 60%;
  background-color: grey;
  margin: 0px;
  float: right;
`;

const FillerStyles = styled.div`
  height: 100%;
  width: ${props => props.per}%;
  background-color: green;
  text-align: right;
  border: 1px solid black;
`;

const ProgressBar = ({percentage}) => {
  //console.log('---',percentage);

  return (
    <>
    <ContainerStyles>
      <FillerStyles per={percentage}></FillerStyles>
    </ContainerStyles>
    </>
  );
};

export default ProgressBar;

/*
containerstyles:
border-radius: 8px;

fillerstyles:
 //border-radius: inherit;
*/
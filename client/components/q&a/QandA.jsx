import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { CgSearch } from 'react-icons/cg';
import QuestionSearch from './subcomponents/QuestionSearch.jsx';
import AddQuestion from './subcomponents/AddQuestion.jsx';

const QandAStyle = styled.div`
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;

const Buttons = styled.button`
  background: white;
  width: auto;
  border: 1px solid black;
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  font-size: .7rem;
`;
const Component = styled.div`
  font-weight: lighter;
  margin-bottom: 1rem;

`;
const QandA = (current) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <QandAStyle>
        <Component>QUESTIONS AND ANSWERS</Component>
        <QuestionSearch current={current} />
        <Buttons>MORE ANSWERED QUESTIONS</Buttons>
        <Buttons onClick={() => setShow(true)} style={{cursor: 'pointer'}}>ADD A QUESTION +</Buttons>
        <AddQuestion onClose={() => setShow(false)} current={current} show={show}/>
      </QandAStyle>
    </>
  );
}

export default QandA;
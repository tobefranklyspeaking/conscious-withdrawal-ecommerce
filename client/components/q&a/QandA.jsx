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
        <button>More Answered Questions</button>
        <button onClick={() => setShow(true)} style={{cursor: 'pointer'}}>Add a question +</button>
        <AddQuestion onClose={() => setShow(false)} current={current} show={show}/>
      </QandAStyle>
    </>
  );
}

export default QandA;
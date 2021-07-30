import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { CgSearch } from 'react-icons/cg';
import QuestionSearch from './subcomponents/QuestionSearch.jsx';
import AddQuestion from './subcomponents/AddQuestion.jsx';

const QandAStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;
const QandA = (current) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <QandAStyle>
        <div>Questions and Answers</div>
        <QuestionSearch current={current} />
        <button>More Answered Questions</button>
        <button onClick={() => setShow(true)}>Add a question +</button>
        <AddQuestion onClose={() => setShow(false)} show={show}/>
      </QandAStyle>
    </>
  );
}

export default QandA;
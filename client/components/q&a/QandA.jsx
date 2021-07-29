import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { CgSearch } from 'react-icons/cg';
import QuestionSearch from './subcomponents/QuestionSearch.jsx';

const QandAStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

const QandA = (props) => {
  return (
    <>
      <QandAStyle>
        <div>Questions and Answers</div>
        <QuestionSearch current={props}/>
        <button>More Answered Questions</button>
        <button>Add a question +</button>
      </QandAStyle>
    </>
  );
}

export default QandA;
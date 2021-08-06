import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { CgSearch } from 'react-icons/cg';
import QuestionSearch from './subcomponents/QuestionSearch.jsx';
import AddQuestion from './subcomponents/AddQuestion.jsx';

const QandAStyle = styled.div`
  margin: 1rem 1rem 3rem 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-height: 90vw;
`;

const Buttons = styled.button`
  background: white;
  width: auto;
  border: 1px solid black;
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  font-size: .7rem;
  cursor: pointer;
`;

const Component = styled.div`
  font-weight: lighter;
  margin-bottom: 1rem;

`;
const QandA = ({ current }) => {
  const [show, setShow] = useState(false);
  const [countQ, setCountQ] = useState(2);
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    if (current.id !== undefined) {
      axios.get(`/qa/questions/?product_id=${current.id}`)
        .then(response => {
          setAllQuestions(response.data.results);
        })
        .catch(err => console.log(`Error in QuestionSearch useEffect: ${err}`));
    }
  }, [current.id])

  return (
    <>
      <QandAStyle>
        {/* {console.log(current)} */}
        <Component>QUESTIONS AND ANSWERS</Component>
        <QuestionSearch current={allQuestions} countQ={countQ} />
        <Buttons
          onClick={() => countQ <= allQuestions.length
            ? setCountQ(countQ + 2)
            : setCountQ(2)}>
          {countQ <= allQuestions.length ? 'MORE ANSWERED QUESTIONS' : 'COLLAPSE'}
        </Buttons>
        <Buttons onClick={() => setShow(true)} >ADD A QUESTION +</Buttons>
        <AddQuestion onClose={() => setShow(false)} current={current} show={show} />
      </QandAStyle>
    </>
  );
}

export default QandA;
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';
import Helpful from '/client/components/shared/Helpful.jsx';
import Report from '/client/components/shared/Report.jsx';
import ImageModal from './ImageModal.jsx';
import RenderAnswers from './RenderAnswers.jsx';


const Container = styled.div`
  margin-bottom: 10px;
`;

const Wrap = styled.div`

`;
const AnswerContainer = styled.div`
  margin-bottom: 3%;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const SpaceQ = styled.span`
  font-weight: lighter;
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 1rem;
  float: right;
`;

const QuestionAdditions = styled.div`
  font-weight: lighter;
  font-size: 13px;
  margin-bottom: 5px;
`;

const LineB = styled.div`
  font-size: 8px;
  margin-top: 5px;
  font-weight: lighter;
  font-size: 13px;
  margin-bottom: 1rem;

  span {
    color: gray;
    font-weight: lighter;
    font-size: 10px;
    margin-left: 1rem;
  }

  div {
    margin: 1vh 0 0 2vh;
  }
`;

const Button = styled.button`
  font-size: 10;
  margin-left: 2%;
  background-color: hsla(0 0% 0% .3);
  border: none;
`;

const Wrapper = styled.div`
  font-weight: lighter;
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 1rem;
  float: right;
  display: inline-flex;

  .helpfulButton {
    text-decoration: underline;
    font-weight: lighter;
    font-size: 12px;
    float: right;
    padding: 0px 6px 0px 6px;
    background-color: white;
    border: none;
    cursor: pointer;
    text-align: none;
    &:hover.helpfulButton {
      color: blue;
    }
  }
`;




const RenderQuestions = ({ current, updateData, setShowImg, setSource, countQ }) => {
  const [countA, setCountA] = useState(2);
  const [answersLength, setAnswersLength] = useState('');
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);


  const Reported = ({ hide }) => {
    if (hide === true) {
      return null;
    }
    return <div>Reported</div>
  }


  let display = (current, countQ) => {
    let displayedQuestions = current.slice();

    if (current.length > 2) {
      displayedQuestions = displayedQuestions.slice(0, countQ);
      return displayedQuestions;
    } else {
      return displayedQuestions;
    }

  }

  let finalDisplay = display(current, countQ);


  const Questions = ({ state }) => {
    return (
      finalDisplay.map(each => {
        return (
          <div key={each.question_id}>
            <Container >
              <Bold>
                Q: {each.question_body}
              </Bold>
              <SpaceQ>
                <SpaceQ style={{ cursor: 'pointer' }} onClick={() => setShow(true)} pass={() => setShow(true)}><u>Add Answer</u>
                </SpaceQ>
                <SpaceQ>|</SpaceQ>
                <Wrapper>
                  <Helpful path={'/qa/questions'} id={each.question_id} helpfulness={each.question_helpfulness} />
                </Wrapper>
                <AddAnswer onClose={() => setShow(false)} current={each} show={show} style={{ cursor: 'pointer' }} />
              </SpaceQ>
            </Container>
            <AnswerContainer>
              <RenderAnswers current={each} setShowImg={setShowImg} setSource={setSource} setAnswersLength={setAnswersLength} countA={countA}/>
              {/* {console.log(answersLength.length)} */}
              <Button
                onClick={() =>
                  countA > 2 && countA <= answersLength && countA
                  ? setCountA(countA + 2)
                  : setCountA(2)}>
                {countA <= answersLength ? 'MORE ANSWERS' : 'COLLAPSE'}
              </Button>
            </AnswerContainer>
          </div>
        )
      })
    )
  }
  return (
    current && (
      <div>
        <Questions current={current} setShowImg={setShowImg} setSource={setSource} />
      </div>
    )
  )
}

export default RenderQuestions;
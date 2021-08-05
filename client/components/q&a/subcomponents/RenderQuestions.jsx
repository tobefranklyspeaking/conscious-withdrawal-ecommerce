import React, { useState, useEffect } from 'react';
import moment from 'moment';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';
import Helpful from '/client/components/shared/Helpful.jsx';
import Report from '/client/components/shared/Report.jsx';
import ImageModal from './ImageModal.jsx';
import Answers from './RenderAnswers.jsx';

const Accordian = styled.div`
`;

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

const LineA = styled.div`
  margin-top: 5px;
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

  button {

  }
`;

const Images = styled.span`

`;

const Img = styled.img`
  max-width: 200px;
  max-height: 150px;
  width: auto;
  height: auto;
  margin-right: 1rem;
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

const HelpfulButton = styled.span`
  .helpfulButton {
    text-decoration: underline;
    margin-left: 1rem;
    font-weight: lighter;
    color: gray;
    background-color: white;
    border: none;
    font-size: 10px;
    cursor: pointer;
    &:hover.helpfulButton {
      color: blue;
    }
  }

  .reportButton {
    background-color: white;
    border: none;
    margin: 5px 0 1rem 1rem;
    color: gray;
    font-weight: lighter;
    font-size: 10px;
    cursor: pointer;

    &:hover.helpfulButton {
      color: blue;
    }
  }
`;



const Questions = ({ current, updateData, update }) => {
  const [moreQuestions, setMoreQuestions] = useState(true);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);


  useEffect(() => {
    try {
      updateData(current.toString())
    }
    catch (err) {
      console.log(err)
    }
  }, [current])

  const Reported = ({ hide }) => {
    console.log('inside reported component within blocks', hide)
    if (hide === true) {
      return null;
    }
    return <div>Reported</div>
  }

  const imgClickZoom = (each) => {
    console.log(each, show);
    return (
      <ImageModal onClose={() => showImg(false)} current={each} show={show} style={{ cursor: 'pointer' }} />
    )
  }

  const Questions = ({ current, state }) => {
    return (
      current.map(each => {
        return (
          <Accordian key={each.question_id}>
            <Container >
              <Wrap>
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
              </Wrap>
            </Container>
            <AnswerContainer>
              <Answers current={each} />
            </AnswerContainer>
          </Accordian>
        )
      })
    )
  }
  return (
    current && (
      <div>
        <Questions current={current} />
      </div>
    )
  )
}

export default Questions;
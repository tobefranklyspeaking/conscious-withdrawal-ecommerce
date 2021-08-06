import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';
import Helpful from '/client/components/shared/Helpful.jsx';
import Report from '/client/components/shared/Report.jsx';
import ImageModal from './ImageModal.jsx'

const Accordian = styled.div`
`;

const Container = styled.div`
  margin-bottom: 10px;
`;

const Wrap = styled.div`

`;

const Bold = styled.span`
  font-weight: bold;
`;

const SpaceA = styled.span`
  font-weight: lighter;
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 1rem;
  cursor: pointer;
`;

const AnswerAdditions = styled.div`
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




const RenderAnswers = ({ current, setShowImg, setSource, setAnswersLength, countA }) => {


  const [moreAnswers, setMoreAnswers] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (current.question_id) {
      getAnswers();
    }
  }, [])

  const getAnswers = () => {
    axios.get(`/qa/questions/${current.question_id}/answers`)
    .then(response => {
      let temp = response.data.results;
      setAnswers(temp);
    })
    .catch(err => console.log(`Error in answers query: ${err}`));
  }

  // useEffect(() => {
  //   answers ?
  //   setAnswersLength(answers.length):
  //   console.log()
  // })

  const handleImage = (url) => {
    setSource(url);
    setShowImg(true);
  }

  const display = (current, countA) => {
    let displayedAnswers = current.slice();
    if (current.length > 2) {
      displayedAnswers = displayedAnswers.slice(0, countA);
      return displayedAnswers;
    } else {
      return displayedAnswers;
    }
  }

  let finalDisplay = display(answers, countA);

  return (
    finalDisplay
      .sort((each, next) => {
        let a = each.helpfulness;
        let b = next.helpfulness;
        if (a > b) {
          return -1;
        } else if (b < a) {
          return 1;
        } else return 0;
      })
      .map(each => {
        if (each.body !== undefined) {
          return (
            <div key={each.answer_id}>
              <AnswerAdditions>
                <LineA>
                  <Bold> A: </Bold>
                  {each.body}
                </LineA>
                <LineB >
                  <span> by {each.answerer_name}, {moment(each.question_date).format('ll')} </span>
                  <span> | </span>
                  <HelpfulButton>
                    <Helpful path={'/qa/questions'} id={each.answer_id} helpfulness={each.helpfulness} />
                    <span> | </span>
                    <Report path={'/qa/questions'} id={each.answer_id} />
                  </HelpfulButton>
                </LineB>
                {Object.keys(each.photos).length > 0 && Object.keys(each.photos).length < 6
                  ? <LineB>
                    <div style={{ margin: '0.5rem' }}>Attached Photos: </div>
                    <Images>
                      {each.photos
                        ? each.photos.map((each, index) => {
                          return (
                            <span key={index}>
                              <Img src={each.url} onClick={() => handleImage(each.url)} style={{ cursor: 'pointer' }} />
                            </span>
                          )
                        })
                        : '#'}
                    </Images>
                    <div>
                      <span> by {each.answerer_name}, {moment(each.question_date).format('ll')} </span>
                      <span> | </span>
                      <HelpfulButton >
                        <Helpful path={'/qa/questions'} id={each.answer_id} helpfulness={each.helpfulness} />
                        <span> | </span>
                        <Report path={'/qa/questions'} id={each.answer_id} />
                      </HelpfulButton >
                    </div>
                  </LineB>
                  : null}
              </AnswerAdditions>
            </div>
          )
        } else {
          return (
            each.map(item => {
              return (
                <div>{item}</div>
              )
            })
          )
        }
      })
  )
}

export default RenderAnswers;
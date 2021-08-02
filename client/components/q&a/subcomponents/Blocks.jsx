import React, { useState } from 'react';
import moment from 'moment';
import AddAnswer from './AddAnswer.jsx';
import styled from 'styled-components';

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

const SpaceQ = styled.span`
  font-weight: lighter;
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 1rem;
  float: right;
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
  margin-bottom: 25px;
  font-weight: lighter;
  font-size: 13px;
  margin-bottom: 5px;

  span {
    color: gray;
    font-weight: lighter;
    font-size: 10px;
    margin-bottom: 5px;
    margin-left: .7rem;
  }

  div {
    margin-top: 1vh;
    margin-bottom: 2vh;
  }
`;

const Details = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Answers = styled.div`

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

const Blocks = (props) => {
  const [moreAnswers, setMoreAnswers] = useState(true);
  const [show, setShow] = useState(false);

  const Questions = (question) => {
    return (
      <Accordian key={question.question_id}>
        <Container >
          <Wrap>
            <Bold>
              Q: {question.question_body}
            </Bold>
            <SpaceQ>
              <SpaceQ cursor='pointer' background-color='gray' onClick={() => setShow(true)}><u>Add Answer</u></SpaceQ>
              <SpaceQ>|</SpaceQ>
              <SpaceQ cursor='pointer'><u>Yes</u> ({question.question_helpfulness})</SpaceQ>
              <SpaceQ> Helpful? </SpaceQ>
              <AddAnswer onClose={() => setShow(false)} current={question} show={show} cursor='pointer' />
            </SpaceQ>
          </Wrap>
        </Container>
        <Container>
          {Answers(question)}
        </Container>
      </Accordian>
    )
  }


  const Answers = ({ answers }) => {
    console.log(answers);

    //template tag html
    // if (Object.keys(answer.answers) > 1 && moreAnswers === true) {
    //   return (
    //     <div key={each}>
    //       <div> A: {answerObj.body} </div>
    //       <div>
    //         <span>by {answerObj.answerer_name} | Helpful? Yes ({answerObj.helpfulness}) | Report</span>
    //       </div>
    //       <button >More Answered Questions</button>
    //     </div>
    //   )
    // } else if (moreAnswers === false) {
    return (
      Object.keys(answers)
        .sort((each, next) => {
          let a = answers[each].helpfulness;
          let b = answers[next].helpfulness;
          if (a > b) {
            return -1;
          } else if (b < a) {
            return 1;
          } else return 0;
        })
        .map(each => {
          let answerObj = answers[each];
          if (answerObj.body !== undefined) {
            return (
              <div key={parseInt(each)}>
                <AnswerAdditions>
                  <LineA>
                    <Bold> A: </Bold>
                    {answerObj.body}
                  </LineA>
                  <LineB >
                    <span> by {answerObj.answerer_name}, {moment(answerObj.question_date).format('ll')} </span>
                    <span> | </span>
                    <span> Helpful? </span>
                    <span cursor='pointer'> <u>Yes</u> ({answerObj.helpfulness}) </span>
                    <span> | </span>
                    <span cursor='pointer'> <u>Report</u> </span>
                  </LineB>
                  <LineB>
                    <div>Yes, as you can see in these photos</div>
                    <Images>
                      <span>
                        {answerObj.photos
                          ? answerObj.photos.map((each, index) => <Img key={index} src={each} />)
                          : '#'}
                        <Img src='https://source.unsplash.com/random/' />
                        <Img src="http://placecorgi.com/260/180" />
                      </span>
                    </Images>
                    <div>
                      <span> by {answerObj.answerer_name}, {moment(answerObj.question_date).format('ll')} </span>
                      <span> | </span>
                      <span> Helpful? </span>
                      <span cursor='pointer'> <u>Yes</u> ({answerObj.helpfulness}) </span>
                      <span> | </span>
                      <span cursor='pointer'> <u>Report</u> </span>
                    </div>
                  </LineB>
                </AnswerAdditions>
              </div>
            )
          } else {
            return (
              <div>No answers at this time</div>
            )
          }
          <button>Load more answers</button>
        })
    )
    // } else {
    //   return <div>No answers to question.</div>
    // }
  }

  return (
    <div>
      {props.map(each => {
        return Questions(each);
      })}
    </div>
  )
}

export default Blocks;
import React, { useState } from 'react';
import moment from 'moment';
import AddAnswer from './AddAnswer.jsx';

const Blocks = (props) => {
  const [moreAnswers, setMoreAnswers] = useState(true);
  const [show, setShow] = useState(false);

  const Questions = (question) => {
    console.log(question)
    return (
      <div key={question.question_id}>
        <div >
          <span>
            Q: {question.question_body}
          </span>
          <span> Helpful? ({question.question_helpfulness})| </span>
          <span style={{cursor: 'pointer'}} onClick={() => setShow(true)}>Add Answer</span>
          <AddAnswer onClose={() => setShow(false)} current={question} show={show}/>
        </div>
        <div>
          {Answers(question)}
        </div>
      </div>
    )
  }


  const Answers = (answer) => {
    // console.log(moreAnswers, Object.keys(answer.answers));
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
        Object.keys(answer.answers)
        .sort((each, next) => {
          let a = answer.answers[each].helpfulness;
          let b = answer.answers[next].helpfulness;
          if (a > b) {
            return -1;
          } else if (b < a) {
            return 1;
          } else return 0;
        })
        .map(each => {
          let answerObj = answer.answers[each];
          if (answerObj.body !== undefined) {
            return (
              <div key={each}>
                <div> A: {answerObj.body} </div>
                  <span>by {answerObj.answerer_name}, {moment(answerObj.question_date).format('ll')} | Helpful? Yes ({answerObj.helpfulness}) | Report</span>
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
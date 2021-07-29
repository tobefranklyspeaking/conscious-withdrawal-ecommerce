import React from 'react';
import QASearch from './QuestionSearch.jsx';

const Blocks = (props) => {
  console.log('what are my props inside blocks?', props)
  const Question = () => {
    return (
      <div>
        <span>
          Q: {props.question_body}
        </span>
        <span>Helpful?</span>
        <span>Add Answer</span>
      </div>
    )
  }

  const Answer = () => {
    let list = [];
    for (var item in props.answers) {
      list.push(props.answers[item])
    }

    return (
      <div>
        {list.map(each => {
          return (
            <div key={each.answer_id}>
              <div> A: {each.body} </div>
              <div>
                <span>by {each.answerer_name} | Helpful? Yes (0) | Report</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      {Question()}
      {Answer()}
    </div>
  )
}

export default Blocks;
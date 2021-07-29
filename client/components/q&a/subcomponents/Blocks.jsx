import React from 'react';
import QASearch from './QuestionSearch.jsx';

const Blocks = (props) => {

  const Question = () => {
    return (
      <div>
        Q: {props.question_body}
      </div>
    )
  }

  //requires rework
  const Answer = () => {
    return (
      <div>
        {
          console.log('answers inside blocks', props)
          // for (let item in props.answers) {
          //   console.log(props.answers[item].body);
          //   if (text.answers[item].body) {
          //     return (
          //       <div key={item}>
          //       <Filtered>{text.answers[item].body}</Filtered>
          //       </div>
          //       )
          //     }
          //   }
          //   A: {props.answers[0].body}

        }
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
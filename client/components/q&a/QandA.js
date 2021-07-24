import React, {useStat, useEffect} from 'react';
import styled from "styled-components";
import { CgSearch } from 'react-icons/cg';

const QandAStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

const QandA = () => {

  return (
    <>
      <QandAStyle>
        <div>Questions and Answers</div>
        <input></input>
        <div>
          <span>
            Question: Does this work?
            </span>
            <span>
              Helpful? Yes 25 | Add Answer
          </span>
        </div>
        <div>Answer: It does for now <b/>
          <div>by User1337, May 1, 2019 | Helpful? Yes(0) | Report</div>
        </div>
        <button>More Answered Questions</button>
        <button>Add a question +</button>
      </QandAStyle>
    </>
  );
}

export default QandA;
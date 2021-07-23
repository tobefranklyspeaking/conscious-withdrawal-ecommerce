import React from 'react';
import styled from "styled-components";

const QandAStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
`;

const QandA = () => {

  return (
    <>
      <QandAStyle>
        <h1>Questions and Answers</h1>
      </QandAStyle>
    </>
  );
}

export default QandA;
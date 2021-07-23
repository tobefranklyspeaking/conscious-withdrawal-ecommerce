import React from 'react';
import styled from "styled-components";

const OverviewStyle = styled.div`
  background-color: LightGray;
  margin-left: auto;
  margin-right: auto;
`;

const Overview = () => {

  return (
    <>
      <OverviewStyle>
        <h1>Overview</h1>
      </OverviewStyle>
    </>
  );
}

export default Overview;
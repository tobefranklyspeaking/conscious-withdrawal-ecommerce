import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Modal = styled.div`
  position: fixed;
  background-color: hsla(0, 0%, 0%, 0.5);
  box-shadow: 5px, 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: relative;
  width: 80%;
  height: 70%;
  background-color: white;

  .img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: white;
  height: auto;
  width: auto;
  border: 1px solid black;
  margin-right: 1rem;
  padding: 1rem;
  font-size: .7rem;
`;

const AddQuestion = ({current, show, onClose}) => {

  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
          <img src={current}></img>
          <Button className="submit" onClick={() => onClose()}>X</Button>
      </ModalContent>
    </Modal>
  )
}

export default AddQuestion;
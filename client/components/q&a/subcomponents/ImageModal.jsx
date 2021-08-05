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
  width: 50%;
  height: 40%;
  background-color: white;
`;

const ModalBody = styled.div`
  display: flex;
  padding: 10px;
  height: 70%;
  border-top: 1px solid lightgray;
  border-bottom: 18px solid lightgray;
`;

const Image = styled.img`
  display: flex;
  max-height: 50%;
  max-width: 50%;
  height: auto;
  width: auto;
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

const ImageModal = ({current, show, onClose}) => {

  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      {/* <ModalContent>
          <ModalBody>
            <Image src={current}/>
          </ModalBody>
      </ModalContent> */}
    </Modal>
  )
}

export default ImageModal;
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Modal = styled.div`
  position: fixed;
  background-color: hsla(0, 0%, 0%, .1);
  /* background-color: white; */
  box-shadow: 5px, 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Image = styled.img`
  display: block;
  max-height: 80%;
  max-width: 80%;
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
      {/* <ModalContent> */}
          {/* <ModalBody> */}
            <Image src={current}/>
          {/* </ModalBody> */}
      {/* </ModalContent> */}
    </Modal>
  )
}

export default ImageModal;
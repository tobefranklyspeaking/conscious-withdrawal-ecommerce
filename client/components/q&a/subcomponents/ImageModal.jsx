import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Modal = styled.div`
  position: fixed;
  background-color: hsla(0, 0%, 0%, .4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Image = styled.img`
  display: block;
  max-height: 70%;
  max-width: 70%;
  margin: auto;
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

const ImageModal = ({source, show, onClose}) => {

  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <div>
        {console.log(source, show, onClose)}
            <Image src={source}/>
      </div>
    </Modal>
  )
}

export default ImageModal;
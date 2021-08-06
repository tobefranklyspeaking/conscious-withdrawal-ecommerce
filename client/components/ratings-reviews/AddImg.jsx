import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,1)
  box-shadow: 10px, 20px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const ModalContent = styled.div`
  width: 80vh;
  height: 70vh;
  background-color: white;
  border: 1px solid black;
`;


const ModalBody = styled.div`
  padding: 3px;
  height: 60vh;
  width: 80vh;
  border-top: 1px solid #eee;
  border bottom: 1px solid #eee;
  overflow: auto;
`;

const ModalFooter = styled.div`
`;


const AddImage = ({ onClose, setPhoto, showImg }) => {

  if (!showImg) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
    <ModalContent onClick={e => e.stopPropagation()}>
      <ModalBody>
        <div>hi</div>
      </ModalBody>
      <ModalFooter className="modal-footer">
        <button onClick={() => {onClose()}} className="button">Close</button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
};

export default AddImage;

import React, {useState} from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,1)
  box-shadow: 5px, 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 80vh;
  height: 70vh;
  background-color: white;
`;

const ModalHeader = styled.div`
  padding: 10px;
`;

const ModalTitle = styled.div`
  margin: 0;
`;

const ModalBody = styled.div`
  padding: 10px;
  height: 50vh;
  border-top: 1px solid #eee;
  border bottom: 1px solid #eee;
`;

const ModalFooter = styled.div`
  padding: 10px;
`;
const NewReview = ({current, show, onClose}) => {
  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h4 className="modal-title">Add Review</h4>
        </ModalHeader>
        <ModalBody>
          Add Forms Here
        </ModalBody>
        <ModalFooter className="modal-footer">
          <button onClick={onClose} className="button">Cancel</button>
          <button className="submit">Submit</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewReview;
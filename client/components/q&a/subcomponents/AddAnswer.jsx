import React, {useState} from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  background-color: hsla(0, 0%, 0%, 0.5);
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

const AddAnswer = ({question, show, onClose}) => {
  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h4 className="modal-title">Add Answer</h4>
        </ModalHeader>
        <ModalBody>
          <div>Your Answer - mandatory</div>
        <input></input>
        <div>Your Nickname - mandatory</div>
          <input></input>
          <div>Your Email - mandatory</div>
          <input placeholder='Example: jack=@email.com'></input>
          <button>Opens new window to select photos</button>
          {/* thumbnail should appear and max 5 */}
        </ModalBody>
        <ModalFooter className="modal-footer">
          <button onClick={onClose} className="button">Cancel</button>
          <button className="submit">Submit</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddAnswer;

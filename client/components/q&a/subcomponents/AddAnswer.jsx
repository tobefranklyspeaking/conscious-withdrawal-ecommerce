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
  /* display: inline-flex; */
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 80%;
  height: 70%;
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
  display: relative;
  padding: 10px;
  height: 20%;
`;

const Button = styled.button`
  cursor: pointer;
  background: white;
  height: auto;
  width: auto;
  border: 1px solid black;
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  font-size: .7rem;
`;

const AddAnswer = ({ current, show, onClose }) => {
  const [answer, updateAnswer] = useState('');
  const [nickname, updateNickname] = useState('');
  const [email, updateEmail] = useState('');





  const onAnswerChange = (e) => {
    updateAnswer(e);
  }

  const onNicknameChange = (e) => {
    updateNickname(e);
  }

  const onEmailChange = (e) => {
    updateEmail(e);
  }

  const onSubmit = (e) => {
    const id = current.question_id;
    console.log('why is this freaking out', id, nickname, email, answer)

    // `${id}/answers`, {
    axios.post(`qa/questions/${id}/answers?question_id=${id}`,
    {
      "body": answer,
      "name": nickname,
      "email": email,
      "photos": [null]
    })
    .then(res => onclose)
    .catch(err => console.log(err))
  }

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
          <input onChange={e => onAnswerChange(e.target.value)}></input>
          <div>Your Nickname - mandatory</div>
          <input onChange={e => onNicknameChange(e.target.value)}></input>
          <div>Your Email - mandatory</div>
          <input onChange={e => onEmailChange(e.target.value)} placeholder='Example: jack@email.com'></input>
          <div>For authentication reasons, you will not be emailed</div>
          {/* thumbnail should appear and max 5 */}
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button onClick={onClose} className="button">Cancel</Button>
          <Button>Opens new window to select photos</Button>
          <Button className="submit" onClick={() => onSubmit()}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddAnswer;

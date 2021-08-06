import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Modal = styled.div`
  position: fixed;
  background-color: hsla(0, 0%, 0%, .8);
  box-shadow: 10px, 20px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
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

const ModalBody = styled.div`
  padding: 10px;
  height: 50vh;
  border-top: 1px solid #eee;
  border bottom: 1px solid #eee;
  overflow: auto;
  font-weight: bold;
  font-size: 25px;

  input {
    width: 80%;
    height: 10%;
  }
`;

const ModalFooter = styled.div`
  padding: 10px;
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

const AddQuestion = ({ current, show, onClose }) => {
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
    const id = current.id;
    console.log('why is this freaking out', id, nickname, email, answer)

    axios.post(`qa/questions/`,
      {
        "body": answer,
        "name": nickname,
        "email": email,
        "product_id": id
      })
      .then(res => {
        onClose()
        console.log('success')
      })
      .catch(err => console.log(err))
  }

  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h1 className="modal-title">Ask Your Question</h1>
          <h3 className="modal-title">About the {current.name}</h3>
        </ModalHeader>
        <ModalBody>
        <div>*Your Answer</div>
          <input onChange={e => onAnswerChange(e.target.value)}placeholder='Enter answer to question asked here!'></input>
          <div>*Your Nickname</div>
          <input onChange={e => onNicknameChange(e.target.value)} placeholder='jackson11!'></input>
          <div >*Your Email</div>
          <input onChange={e => onEmailChange(e.target.value)} placeholder='Example: jack@email.com'></input>
          <div>For authentication reasons, you will not be emailed</div>
          {/* thumbnail should appear and max 5 */}
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button onClick={onClose} className="button">Cancel</Button>
          <Button className="submit" onClick={() => onSubmit()}>Submit</Button>
          <div>Will close on successful submit</div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddQuestion;
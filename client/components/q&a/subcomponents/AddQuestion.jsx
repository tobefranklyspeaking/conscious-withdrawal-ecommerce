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
`;

const ModalHeader = styled.div`
  display: flex;
  height: auto;
  padding: 10px;
`;

const ModalBody = styled.div`
  display: flex;
  padding: 10px;
  height: 70%;
  border-top: 1px solid lightgray;
  border-bottom: 18px solid lightgray;
`;

const ModalFooter = styled.div`
  display: flex;
  padding: 10px;
  height: auto;
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
          <div>*Your Question</div>
          <input onChange={e => onAnswerChange(e.target.value)}></input>
          <div>*Your Nickname</div>
          <input onChange={e => onNicknameChange(e.target.value)}></input>
          <div>*Your Email</div>
          <input onChange={e => onEmailChange(e.target.value)} placeholder='Example: jack@email.com'></input>
          <div>For authentication reasons, you will not be emailed</div>
          {/* thumbnail should appear and max 5 */}
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button onClick={onClose} className="button">Cancel</Button>
          <Button className="submit" onClick={() => onSubmit()}>Submit</Button>
          <div>Page will close if successful submit occurs</div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddQuestion;
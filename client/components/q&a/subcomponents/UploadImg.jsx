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
  z-index: 10;
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




const UploadImg = ({current, show, onClose, pass}) => {
  const [file, addFile] = useState('');

  const addCurrentFile = (e) => {
    addFile(e);
  }

  const clickSubmit = (e) => {
    const id = current.id;
    console.log('inside photo submit', id, nickname, email, answer)

    // axios.post(`qa/questions/`,
    // {
    //   "body": answer,
    //   "name": nickname,
    //   "email": email,
    //   "product_id": id
    // })
    // .then(res => {
    //   onClose()
    //   console.log('success')
    // })
    // .catch(err => console.log(err))
  }

  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h1 className="modal-title">Submit Photos</h1>
        </ModalHeader>
        <ModalBody>
          <Button>Choose File</Button>
          <Button onClick={() => addFile()}>Upload</Button>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button onClick={onClose} className="button">Cancel</Button>
          <Button onClick={() => clickSubmit()} >Submit</Button>
          <div>Page will on successful submit</div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UploadImg;
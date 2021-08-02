import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewReviewForm from './NewReviewForm.jsx';

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
  overflow: auto;
`;

const ModalFooter = styled.div`
  padding: 10px;
`;
const NewReview = ({current, show, onClose}) => {
  const [charOptions, setCharOptions] = useState({});

  useEffect(async () => {
    try {
      let res = await axios.get(`/reviews/meta?product_id=${current.id}`);
      setCharOptions(res.data.characteristics);
      console.log('successful get meta data: ', res.data);
    } catch (err) {
      console.error(err)
    }
  }, [current]);

  console.log('chars --', charOptions);

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
          <NewReviewForm charOptions={charOptions} id={current.id}/>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <button onClick={onClose} className="button">Close</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewReview;


/*
<ModalFooter className="modal-footer">
          <button onClick={onClose} className="button">Cancel</button>
          <button className="submit">Submit</button>
 </ModalFooter>
*/
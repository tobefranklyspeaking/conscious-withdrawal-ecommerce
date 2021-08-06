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
  border: 1px solid black;
`;

const ModalContent = styled.div`
  width: 90vh;
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
  border: 1px solid black;
  font-weight: bold;
  font-size: 25px;
`;

const ModalFooter = styled.div`
  padding: 10px;
  border: 1px solid black;
`;
const NewReview = ({current, show, onClose}) => {
  const [charOptions, setCharOptions] = useState({});

  useEffect(async () => {
    if (current.id) {
      try {
        let res = await axios.get(`/reviews/meta?product_id=${current.id}`);
        setCharOptions(res.data.characteristics);
        // console.log('successful get meta data: ', res.data);
      } catch (err) {
        console.error(err)
      }
    }
  }, [current]);

  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h4 className="modal-title">Write Your Review</h4>
        </ModalHeader>
        <ModalBody>
          About the {current.name}
          <NewReviewForm charOptions={charOptions} id={current.id} onClose={onClose}/>
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
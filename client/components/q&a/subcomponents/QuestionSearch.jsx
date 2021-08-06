import React, { useState, useEffect, IconContext } from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import RenderQuestions from './RenderQuestions.jsx';
import ImageModal from './ImageModal.jsx';

const SearchBarStyle = styled.input`
  width: 100%;
  display: flex;
  line-height: 20%;
  padding: 2vh 2vh;
`;

const Search = styled.div`
  position: relative;
  height: auto;
  width: auto;
  margin-bottom: 3%;
`;
const Filtered = styled.div`
  position: absolute;
  background-color: tan;
  height: auto;
  width: auto;
  padding: 5px;
  /* background-color: white; */
  z-index: 1;
`;

const List = styled.div`
  height: auto;
  max-height: 50vh;
  overflow-y: scroll;
  border: hsla(0 0% 0% 1);
`;

const SearchButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 35%;
  width: 18px;
  height: 18px;
`;

const Quest = styled.div`
  height: auto;
  max-height: 50vh;
  overflow-y: scroll;
  border: hsla(0 0% 0% 1);
`;


const QASearch = ({ current, countQ }) => {

  //current is all products
  const [filteredQuestions, setFiltered] = useState([]);
  const [selection, setSelection] = useState(null);

  const [search, setSearch] = useState('');

  const [update, setUpdate] = useState(null);
  const [showImg, setShowImg] = useState(false);
  const [source, setSource] = useState('');


  /* will use to update click functionality */
  const handleClick = async () => {
    // This will allow the user to submit search
    console.log('handleClick clicked')
  }

  const updateData = (props) => {
    console.log(current);
    setUpdate(props);
  }
  /* will use to update click functionality */

  // const handleQuestion = (e) => {
  //   Questions(e);
  // }

  const onChange = (searchText) => {
    setSearch(searchText.toLowerCase());
  }

  return (
    <>
      <Search>
        <SearchBarStyle
          type='text'
          value={search}
          onChange={e => onChange(e.target.value)}
          placeholder='Have a question? Search for answers…'>
        </SearchBarStyle>
        <SearchButton>
          <CgSearch onClick={() => handleClick()} style={{ cursor: 'pointer' }} />
        </SearchButton>
        <ImageModal onClose={() => setShowImg(false)} source={source} show={showImg} style={{ cursor: 'pointer' }} />
      </Search>
      {search && (
        current.filter(text => {

          if (search.length > 2 && text !== undefined) {
            console.log('inside if statement numero uno')
            if (text.question_body.toLowerCase().indexOf(search) !== -1) {
              console.log('inside filter', text)
              return true;
            } else {
              return false
            }
          }
        }).map((value, i) => {
          return (
            <Quest key={i}>{value.question_body}</Quest>
          )
        })
      )}
      <List name='dropdown'>
        <RenderQuestions
          current={current}
          updateData={updateData}
          setShowImg={setShowImg}
          setSource={setSource}
          countQ={countQ}
        />
      </List>
    </>
  )
}


export default QASearch;
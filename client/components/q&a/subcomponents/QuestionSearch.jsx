import React, { useState, useEffect, IconContext } from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import axios from 'axios';
import Blocks from './Blocks.jsx';

const SearchBarStyle = styled.input`
  width: 100%;
  display: flex;
  line-height: 20%;
  padding: 2vh 2vh;
  margin-bottom: 1rem;
`;

const Search = styled.div`
  position: relative;
  width: auto;
`;
const Filtered = styled.div`
  height: auto;
  width: auto;
  padding: 5px;
  background-color: white;
`;

const List = styled.div`
  height: auto;
  max-height: 300px;
  overflow-y: scroll;
`;

const SearchButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 18px;
  height: 18px;
`;


const QASearch = ({ current }) => {
  const [search, setSearch] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    if (current.current.id !== undefined) {
      axios.get(`/qa/questions/?product_id=${current.current.id}`)
        .then(response => {
          console.log('successful question get', response.data)
          setAllQuestions(response.data.results);
        })
        .catch(err => console.log(`Error in QuestionSearch useEffect: ${err}`));
    }
  }, [current.current.id])

  const handleClick = async () => {
    // This will allow the user to submit search
    console.log('handleClick clicked')
  }

  const onChange = (searchText) => {
    setSearch(searchText);
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
          <CgSearch onClick={() => handleClick()} />
        </SearchButton>
      </Search>
      <List>
        {Blocks(allQuestions)}
        {/* <button>LOAD MORE ANSWERS</button> */}
      </List>
    </>
  )
}

export default QASearch;

// {
//   allQuestions.filter(text => {
//     if (search.length > 2 && text.question_body.toLowerCase().indexOf(search)) {
//       <div>{Blocks(text)}</div>
//     } else return null
//   })
// }


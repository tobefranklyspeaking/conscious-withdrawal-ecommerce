import React, { useState, useEffect, IconContext } from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import axios from 'axios';
import Questions from './RenderQuestions.jsx';

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
`;

const SearchButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 35%;
  width: 18px;
  height: 18px;
`;


const QASearch = ({ current }) => {
  const [search, setSearch] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);
  const [filteredQuestions, setFiltered] = useState([]);
  const [selection, setSelection] = useState(null);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    if (current.id !== undefined) {
      axios.get(`/qa/questions/?product_id=${current.id}`)
        .then(response => {
          setAllQuestions(response.data.results);
        })
        .catch(err => console.log(`Error in QuestionSearch useEffect: ${err}`));
    }
  }, [current.id, filteredQuestions, update])

  const handleClick = async () => {
    // This will allow the user to submit search
    console.log('handleClick clicked')
  }

  const updateData = (props) => {
    setUpdate(props);
  }

  const handleQuestion = (e) => {
    // setSearch(e.question_);
    // console.log(e);
    Questions(e);
  }

  const onChange = (searchText) => {
    // console.log(searchText);
    setSearch(searchText.toLowerCase());
  }

  const [count, setCount] = useState(0);
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
      </Search>
      <List name='dropdown'>
        <List>
          <Questions current={allQuestions} updateData={updateData} update={update} />
        </List>
        {search && (
          allQuestions.filter(text => {
            if (search.length > 2 && text !== undefined) {
              if (text.question_body.toLowerCase().indexOf(search) !== -1) {
                console.log('inside filter', text)
                return true;
              } else {
                return false
              }
            }
          }).map((value, i) => {
            return (
              <div key={i}>Hello World</div>
            )
          })
        )}
      </List>
    </>
  )
}


export default QASearch;
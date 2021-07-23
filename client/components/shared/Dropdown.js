import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Dropdown = ({ options, title }) => {
  //setting state
  const [opt, setOpt] = useState(options);
  const [isOpen, setOpen] = useState(false);
  const [choice, setChoice] = useState('');

  //styling component elements
  const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    justify-content: space-around;
    width: 8rem;
  `;
  const Button = styled.button`
    background: transparent;
    border: 1px solid black;
    padding: 0.25rem 1rem;
    margin: 0 auto;
    height: 50%;
    width: 75%;
  `;

  return (
    <Wrapper>
      <Button onClick={(e) => {setOpen(!isOpen)}}>{title}</Button>
      {isOpen && options.map((option, i) => (
        <Button key={i} onClick={(e) => setChoice(option)}>{option}</Button>
      ))}
    </Wrapper>
  );
};

class classDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      isOpen: false,
      choice: ''
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState({
      choice: e.target.value
    })
  }

  render() {
    return (<div>
      <button onClick={this.clickHandler}></button>
    </div>);
  }
}
export default Dropdown;

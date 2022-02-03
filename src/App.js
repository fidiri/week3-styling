import React from "react";
import Button from "./components/Button/Button";
import ButtonInline from "./components/ButtonInline";
import ButtonPlain from "./components/ButtonPlain";
import styled from "styled-components";
import "./App.css";

const onClick = () =>{
  alert("Hello World!");
}

// takes our component and returns a new component
const StyledButton = styled(ButtonPlain)`
   background-color: blue;
   color: white;
   padding: 0.75rem 2.5rem;
   border: none;
   border-radius: 0.375rem;
   font-size: 0.875rem;
   font-weight: 400;
   text-transform: uppercase;
   cursor: pointer;
`;



function App() {
 
  return (
    <div>
      <Button onClick={onClick}>Hello World!</Button>
      <ButtonInline onClick={onClick}>Hello World!</ButtonInline>
      <StyledButton onClick={onClick}>Hello World!</StyledButton>
    </div>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  &:hover {
    color: blue;
    background-color: green;
  }
  width: 40vw;
  height: 100px;
  margin: 80px auto;
  line-height: 100px;
  color: red;
  font-family: sans;
  background-color: pink;
  text-align: center;
  border-radius: 32px;
`;

function App() {
  return (
    <div>
      <H1>Styled Components</H1>
    </div>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import RightL1C1 from './components/right-hand-side/right-l1-c1.component';
import LeftL1C1 from './components/left-hand-side/l1-c1.component';
import TreeContext from './context/treeContext';

const TreeContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const InnerTreeContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 280px;
  margin: 0 auto;
`;

const AppWrapper = styled.div`
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

function App() {
  const message = 'Hello From App Props';
  return (
    <AppWrapper>
      <h1>Context API</h1>
      <hr />
      <h1>Tree</h1>
      <TreeContainer>
        <InnerTreeContainer>
          <TreeContext.Provider
            value={{ message: message, other: 'Other Props' }}
          >
            <span>
              <LeftL1C1 />
            </span>
          </TreeContext.Provider>
          <span>
            <RightL1C1 />
          </span>
        </InnerTreeContainer>
      </TreeContainer>
    </AppWrapper>
  );
}

export default App;

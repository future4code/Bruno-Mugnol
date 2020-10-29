import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import stc from 'string-to-color';

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
`
const SpeciesListItem = styled.div`
  margin: 4px 8px;
  color: ${stc("red")};
`

const StarWarsIncompleteUrl = "https://swapi.dev/api/species/?page="

class App extends React.Component {

  render() {

    return (
      <MainContainer>

        <SpeciesListItem>oie</SpeciesListItem>

      </MainContainer>
    )
  }
}

export default App;

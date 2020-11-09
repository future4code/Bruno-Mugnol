import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import stc from 'string-to-color';
import Header from './components/Header';
import SpeciesList from './components/SpeciesList';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
`

const urlStarWarsIncomplete = "https://swapi.dev/api/species/?page="




class App extends React.Component {
  state = {
    allSpecies: [],
    searchedSpecies: null,
  }

  componentDidMount = () => {
    this.getSpeciesFromPage(1)
    this.getSpeciesFromPage(2)
    this.getSpeciesFromPage(3)
    this.getSpeciesFromPage(4)
  }

  getSpeciesFromPage = (pageNumber) => {
    let speciesArray
    axios.get(`${urlStarWarsIncomplete + pageNumber}`)
      .then(response => {
        speciesArray = this.state.allSpecies.concat(response.data.results)
        this.setState({ allSpecies: speciesArray })
      }).catch(error => {
        console.log(`Erro no getSpeciesFromPage(${pageNumber})`)
        console.log(error.message)
      })
  }

  render() {
    
    return (
      <MainContainer>
        <Header />

        <SpeciesList
          allSpecies={this.state.allSpecies}
          searchedSpecies={this.state.searchedSpecies}
        />

      </MainContainer>
    )
  }
}

export default App;

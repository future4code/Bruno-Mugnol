import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import stc from 'string-to-color';
import SpeciesCard from './SpeciesCard';

const MainContainer = styled.div`
  box-sizing: border-box;
  background-color: lightgray;
  margin: 0;
  padding: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100% - 80px);
`
const SpeciesListItem = styled.button`
  box-sizing: border-box;
  display: inline;
  margin: 4px 8px;
  color: black;
  border-radius: 20%;
  background-color: silver;
`


class SpeciesList extends React.Component {
    state = {
        renderCard: false,
        speciesName: ""
    }

    onClickOpenCard = (name) => {
        this.setState({
            renderCard: true,
            speciesName: name
        })
    }

    onCLickCloseCard = () => {
        this.setState({
            renderCard: false,
            speciesName: ""
        })
    }

    render() {
        const renderedSpeciesList = this.props.searchedSpecies ?
            this.props.searchedSpecies.map((species) => {
                return (
                    <SpeciesListItem
                        key={species.created}
                        onClick={() => {this.onClickOpenCard(species.name)}}
                    >{species.name}
                    </SpeciesListItem>
                )
            })
            :
            this.props.allSpecies.map((species) => {
                return (
                    <SpeciesListItem
                        key={species.created}
                        onClick={() => {this.onClickOpenCard(species.name)}}
                    >{species.name}
                    </SpeciesListItem>
                )
            })

        const renderedCard = this.state.renderCard ?
            <SpeciesCard
                speciesName={this.state.speciesName}
                onClickCloseCard={this.onCLickCloseCard} />
            :
            <></>

        return (
            <MainContainer>
                {renderedSpeciesList}
                {renderedCard}
            </MainContainer>
        )
    }
}

export default SpeciesList
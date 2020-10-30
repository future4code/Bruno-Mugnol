import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import stc from 'string-to-color';

const HumongousDiv = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const CloseButton = styled.button`
  box-sizing: border-box;
  display: inline;
  margin: 4px 8px;
  color: black;
  border-radius: 20%;
  background-color: #008080;
`
const CardDiv = styled.div`
    position: absolute;
    border-radius: 15%;
    padding-bottom: 8px;
    left: calc(50vw - 160px);
    top: 15vh;
    width: 320px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ color }) => (stc(color))};
`

class SpeciesCard extends React.Component {
    state = {
        info: null,
        homeworldInfo: null
    }

    componentDidMount = () => {
        this.getSpeciesDetails()
    }

    getSpeciesDetails = () => {
        axios.get(`https://swapi.dev/api/species/?search=${this.props.speciesName}`)
            .then(response => {
                this.setState({ info: response.data.results })
            }).then(() => {
                this.getHomeworldDetails()
            })

    }

    getHomeworldDetails = () => {
        if (this.state.info) {
            axios.get(this.state.info[0].homeworld)
                .then(response => {
                    this.setState({ homeworldInfo: response.data })
                }).catch(error => {
                    console.log("Homeworld fetching error")
                    console.log(error.message)
                    this.setState({ homeworldInfo: null })
                })
        }
    }

    render() {
        const renderedHomeworldDetails = this.state.homeworldInfo ?
            <>
                <h2><strong>Homeworld -</strong> {this.state.homeworldInfo.name}</h2>
                <p><strong>Climate:</strong> {this.state.homeworldInfo.climate}</p>
                <p><strong>Terrain:</strong> {this.state.homeworldInfo.terrain}</p>
                <p><strong>Gravity:</strong> {this.state.homeworldInfo.gravity}</p>
                <p><strong>Population:</strong> {this.state.homeworldInfo.population}</p>
            </>
            :
            <></>
        const renderedDetails = this.state.info ? this.state.info.map((data) => {
            return (
                <HumongousDiv>
                    <CardDiv color={data.skin_colors}>
                        <CloseButton onClick={this.props.onClickCloseCard}><strong>X</strong></CloseButton>
                        <h2><strong>Species - {data.name}</strong></h2>
                        <p><strong>Classification:</strong> {data.classification}</p>
                        <p><strong>Average height:</strong> {data.average_height} cm</p>
                        <p><strong>Average lifespan:</strong> {data.average_lifespan} years</p>
                        <br />
                        {renderedHomeworldDetails}
                    </CardDiv>
                </HumongousDiv>
            )
        })
            :
            <></>

        return (
            <div>
                {renderedDetails}
            </div>
        )
    }
}

export default SpeciesCard
import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import stc from 'string-to-color';

const HeaderDiv = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
`

class Header extends React.Component {


    render() {

        return (
            <HeaderDiv>
                Header
            </HeaderDiv>
        )
    }
}

export default Header
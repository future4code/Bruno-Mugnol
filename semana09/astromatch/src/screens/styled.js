import styled from 'styled-components';

export const CenteredBiggerCard = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    margin: 0;
    margin-top: 48px;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 320px;
    height: 480px;
    background-color: white;
`

export const Img200x200 = styled.img`
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`

export const Img64x64 = styled.img`
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`

export const InnerCard = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: green;
    text-align: center;
`
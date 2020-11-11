import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import { baseUrl } from './constants/constants'

import MatchingScreen from './screens/MatchingScreen';
import YourMatches from './screens/YourMatches';

const WholePageDiv = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: silver;
`

const App = () => {
  const [page, setPage] = useState("MatchingScreen")

  const onClickChangePage = () => {
    if (page === "MatchingScreen") {
      setPage("YourMatches")
    } else {
      setPage("MatchingScreen")
    }
  }

  const renderedPage = () => {
    switch (page) {
      case "MatchingScreen":
        return <MatchingScreen onClickChangePage={onClickChangePage} />
      case "YourMatches":
        return <YourMatches onClickChangePage={onClickChangePage} />
      default:
        return <div><h1>Error 404:</h1><p>Page not found</p></div>
    }
  }

  return (
    <WholePageDiv>
      {renderedPage()}
    </WholePageDiv>
  )
}

export default App;

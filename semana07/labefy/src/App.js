import './App.css';
import React from 'react';
import LoginPage from './components/LoginPage';
import PlayList from './components/PlayList';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

class App extends React.Component {
  state = {
    pageNumber: 0,
    headers: "",
    playlistsArray: [],
  }

  componentDidMount = () => {
    this.fetchAuthorization()
  }

  fetchAuthorization = () => {
    const authorizationObject = JSON.parse(localStorage.getItem("user"))
    if (authorizationObject) {
      const newHeaders = {
        "Authorization": `${authorizationObject.name + "-" + authorizationObject.last_name + "-" + authorizationObject.class}`
      }
      this.setState({
        headers: newHeaders,
        pageNumber: 1
      }, () => {
        this.fetchPlaylists()
      })
    } else {
      this.setState({ pageNumber: 0 })
    }
  }

  fetchPlaylists = () => {
    if (this.state.headers) {
      axios.get(baseUrl, { headers: this.state.headers })
        .then((response) => {
          this.setState({ playlistsArray: response.data.result.list })
        })
    }
  }

  render() {
    console.log(this.state.playlistsArray)
    const renderedPage = () => {
      switch (this.state.pageNumber) {
        case 0:
          return <LoginPage fetchAuthorization={this.fetchAuthorization} />
        case 1:
          return <PlayList />
        default:
          return <div>error</div>
      }
    }

    return (
      <div>
        {renderedPage()}
      </div>
    );
  }
}

export default App;

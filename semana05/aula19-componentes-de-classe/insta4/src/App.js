import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <article>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/id/1/50/50'}
            fotoPost={'https://picsum.photos/id/2/200/150'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'bob'}
            fotoUsuario={'https://picsum.photos/id/13/50/50'}
            fotoPost={'https://picsum.photos/id/31/200/150'}
          />
        </div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'jânia'}
            fotoUsuario={'https://picsum.photos/id/2/50/50'}
            fotoPost={'https://picsum.photos/id/20/200/150'}
          />
        </div>
      </article>
    );
  }
}

export default App;

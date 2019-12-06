import React, {useReducer} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import artists from './store/artists';
import ArtistSlide from './components/artist/artistSlide';
import ArtistSlideBackground from './components/artist/artistSlideBackground';
import artistReducer from './reducers/artistReducer';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(artistReducer, {index: 0});

  function populateArtists() {
    return artists.map((a:any, i:number) => 
      (
        <ArtistSlide
          key={a.id}
          index={a.id}
          color={a.colors}
          artist={a.artist}
          copy={a.copy}
        />
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <ArtistSlideBackground 
        secondary={artists[state.index].colors.secondary}
        tertiary={artists[state.index].colors.tertiary}
        index={artists[state.index].id}
      />
      <StyledApp className="App" onClick={() => dispatch({type: 'next'})}>
        {populateArtists()[state.index]}
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

`;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }
  html{font-size: 62.5%}
  body{
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
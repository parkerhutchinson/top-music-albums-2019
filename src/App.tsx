import React, {useReducer, useEffect, useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import artists from './store/artists';
import ArtistSlide from './components/artist/artistSlide';
import ArtistSlideBackground from './components/artist/artistSlideBackground';
import artistReducer from './reducers/artistReducer';
import NavigationAlbum from './components/navigation/navigationAlbum';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [state, dispatch] = useReducer(artistReducer, {index: 0});
  const [indexes, setIndexes] = useState({next: 0, prev: 0});

  function updateNavIndexes(index:number) {
    const nextIndex = index + 1 > artists.length - 1 ? 0 : index + 1;
    const prevIndex = index - 1 < 0 ? artists.length - 1 : index - 1;
    setIndexes({next: nextIndex, prev: prevIndex});
  }

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

  useEffect(() => {
    updateNavIndexes(state.index);
  }, [state.index]);

  return (
    <>
      <GlobalStyle />
      <ArtistSlideBackground 
        secondary={artists[state.index].colors.secondary}
        tertiary={artists[state.index].colors.tertiary}
        index={artists[state.index].id}
      />
      <NavigationAlbum 
        albumArt={artists[indexes.next].artist.albumArt}
        index={artists[indexes.next].id}
        direction="next"
        callback={(direction: string) => dispatch({type: direction})}
        primary={artists[indexes.next].colors.primary}
        tertiary={artists[indexes.next].colors.tertiary}
      />
      <NavigationAlbum 
        albumArt={artists[indexes.prev].artist.albumArt}
        index={artists[indexes.prev].id}
        direction="prev"
        callback={(direction: string) => dispatch({type: direction})}
        primary={artists[indexes.prev].colors.primary}
        tertiary={artists[indexes.prev].colors.tertiary}
      />
      <StyledApp className="App">
        {populateArtists()[state.index]}
      </StyledApp>
    </>
  );
}

export default React.memo(App);

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
import React, {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import artists from './store/artists';
import ArtistCard from './components/artist/artistCard';

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  function transitionTest() {
    setTimeout(() => {
      setIndex(1);
    }, 2000)
  }
  function populateArtists() {
    return artists.map((a:any, i:number) => 
      (
        <ArtistCard
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
    transitionTest();
  }, [])
  return (
    <>
      <GlobalStyle />
      <StyledApp className="App">
        {populateArtists()[index]}
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
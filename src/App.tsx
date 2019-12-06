import React, {useState, useEffect, useRef, useReducer} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import artists from './store/artists';
import ArtistSlide from './components/artist/artistSlide';
import ArtistSlideBackground from './components/artist/artistSlideBackground';
import artistReducer from './reducers/artistReducer';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number>(0);

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

  // useEffect(() => { 
  //   timerRef.current = window.setTimeout(() => {
  //     if (count >= artists.length - 1) {
  //       setCount(0)
  //     } else {
  //       setCount(count + 1);
  //     }
      
  //   }, 2000);
    
  //   return () => {
  //     window.clearTimeout(timerRef.current);
  //   }
  // }, [count]);

  return (
    <>
      <GlobalStyle />
      <ArtistSlideBackground 
        secondary="red"
        tertiary="black"
        index={1}
      />
      <StyledApp className="App">
        {populateArtists()[count]}
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
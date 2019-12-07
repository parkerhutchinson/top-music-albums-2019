import React from "react";
import styled from "styled-components";
import ArtistAlbum from "./artistAlbum";
import ArtistContentEffect from "./artistContentEffect";
import ArtistSpotifyLink from "./artistSpotifyLink";

type TArtist = {
  name: string;
  albumTitle: string;
  albumArt: string;
  spotifyLink: string;
};

type TColors = {
  primary: string;
  secondary: string;
  tertiary: string;
};

interface IArtistCard {
  index: number;
  artist: TArtist;
  color: TColors;
  copy: { bio: string };
}

interface IStyledColor {
  color: string;
}

const ArtistSlide = (props: IArtistCard) => {
  const { color, artist, copy } = props;
  return (
    <StyledArtistSlide>
      <div className="container">
        <StyledContent color={color.primary}>
          <ArtistContentEffect
            element="h1"
            title={artist.name}
            duration={1}
            staggerDuration={0.1}
          />
          <ArtistContentEffect
            element="p"
            title={copy.bio}
            duration={0.8}
            staggerDuration={0.005}
          />
          <ArtistSpotifyLink
            label="Listen On Spotify"
            buttonColor={color.primary}
            labelColor={color.secondary}
            link={artist.spotifyLink}
          />
        </StyledContent>

        <ArtistAlbum
          color={color.primary}
          artist={artist.name}
          album={artist.albumTitle}
          albumArt={artist.albumArt}
          backgroundColor={color.secondary}
        />
      </div>
    </StyledArtistSlide>
  );
};

export default ArtistSlide;

const StyledArtistSlide = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  align-items: stretch;
  .container {
    display: grid;
    grid-template-columns: repeat(27, 1fr);
    width: 100%;
    padding: 50px 0;
    position: relative;
    z-index: 1;
    align-items: center;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

const StyledContent = styled.div`
  grid-column: 2 / span 15;
  color: ${(p: IStyledColor) => p.color};
  position: relative;
  h1 {
    font-size: 11rem;
    text-transform: uppercase;
  }
  p {
    font-size: 3rem;
    font-weight: 200;
    line-height: 40px;
  }
`;



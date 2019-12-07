import React from "react";
import styled from "styled-components";
import numerize from "../../helpers/intToRomanNumerals";

interface IArtistSlideBackground {
  index: number;
  secondary: string;
  tertiary: string;
}

interface IStyledArtistSlideBackground {
  secondary: string;
}

interface ISuperBigRomanNumerals {
  tertiary: string;
}

const ArtistSlideBackground = (props: IArtistSlideBackground) => {
  return (
    <StyledArtistSlideBackground secondary={props.secondary}>
      <SuperBigRomanNumerals tertiary={props.tertiary}>
        {numerize(props.index)}
      </SuperBigRomanNumerals>
    </StyledArtistSlideBackground>
  );
};

export default ArtistSlideBackground;

const StyledArtistSlideBackground = styled.div`
  background: ${(p: IStyledArtistSlideBackground) => p.secondary};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  transition: background 1s ease-out;
  display: flex;
  align-items: stretch;
`;

const SuperBigRomanNumerals = styled.h1`
  font-size: 100rem;
  color: ${(p: ISuperBigRomanNumerals) => p.tertiary};
  position: absolute;
  top: 50%;
  left: 0;
  line-height: 100rem;
  width: 100%;
  text-align: center;
  font-weight: 900;
  z-index: 0;
  transform: translateY(-50%);
`;

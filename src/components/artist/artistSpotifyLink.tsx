import React, {useLayoutEffect, useRef} from "react";
import styled from "styled-components";
import gsap from 'gsap';

interface IArtistSpotifyLink {
  label: string;
  buttonColor: string;
  labelColor: string;
  link: string;
}

interface IStyledArtistSpotifyLink {
  backgroundColor: string;
  textColor: string;
}

const ArtistSpotifyLink = (props: IArtistSpotifyLink) => {
  const linkRef:any = useRef(null);
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to((linkRef.current), {
      delay: 1.5,
      opacity: 1,
      translateY: 0,
      duration: 1,
      ease: 'expo'
    })
  });

  function openLink(e:any, link:string) {
    window.open(link);
    e.preventDefault();
  }

  return (
    <StyledArtistSpotifyLink
      backgroundColor={props.buttonColor}
      textColor={props.labelColor}
      ref={linkRef}
      onClick={(e:any) => openLink(e, props.link)}
    >
      {props.label}
    </StyledArtistSpotifyLink>
  );
};

export default ArtistSpotifyLink;

const StyledArtistSpotifyLink = styled.button`
  display: inline-block;
  background: ${(p: IStyledArtistSpotifyLink) => p.backgroundColor};
  color: ${(p: IStyledArtistSpotifyLink) => p.textColor};
  font-size: 3.0rem;
  padding: 30px 50px;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: -.5px;
  position: relative;
  transform: translateY(100px);
  opacity: 0;
`;

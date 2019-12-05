import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { clearTimeout } from "timers";

interface IAlbum {
  color: string;
  artist: string;
  album: string;
  albumArt: string;
  backgroundColor: string;
}

interface IStyledAlbum {
  color: string;
  backgroundColor?: string;
  readyDelay?: boolean;
  className?: string;
}

const ArtistAlbum = (props: IAlbum) => {
  const timerRef:any = useRef(null);
  const [animIn, setAnimIn] = useState(false);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    let animTimeout:any;
    
    clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      setReady(true);
      clearTimeout(animTimeout);
      animTimeout = setTimeout(() => setAnimIn(true), 200);
    }, 300);
    
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(animTimeout);
      setReady(false);
      setAnimIn(false);
    };
  }, []);

  return (
    <StyledCard
      color={props.color}
      readyDelay={animIn}
      className={`ready-${ready}`}
    >
      <span color={props.color}>
        <span></span>
      </span>
      <img src={props.albumArt} alt="album artwork" />
      <StyledCardAlbumMeta color={props.color}>
        <dt>
          <span title={props.artist}></span>
          <span title={props.artist}></span>
        </dt>
        <dd>{props.album}</dd>
      </StyledCardAlbumMeta>
    </StyledCard>
  );
};

export default ArtistAlbum;

const StyledCard = styled.div`
  position: relative;
  padding: 80px 0 0;
  grid-column: 17 / span 10;
  img {
    display: block;
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform-origin: bottom center;
    transition: all 0.4s cubic-bezier(0.56, 0.58, 0, 1.04);
  }

  & > span {
    position: absolute;
    display: block;
    bottom: 0;
    left: 15%;
    width: 70%;
    height: 100%;
    z-index: 1;
    span {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
    &:before,
    &:after,
    span:before,
    span:after {
      content: "";
      display: block;
      background: ${(p: IStyledAlbum) => p.color};
      position: absolute;
      transition: all 0.2s linear;
    }
    &:before {
      width: 0%;
      height: 10px;

      transition-delay: 0.6s;
    }
    &:after {
      height: 0%;
      width: 10px;
      right: 0;
      transition-delay: 0.4s;
    }
    span:before {
      right: 0;
      bottom: 0;
      height: 10px;
      width: 0%;
      transition-delay: 0.2s;
    }
    span:after {
      left: 0;
      bottom: 0;
      height: 0%;
      width: 10px;
      transition-delay: 0s;
    }
  }
  &.ready-true {
    img {
      opacity: 1;
      ${(p: IStyledAlbum) =>
        p.readyDelay
          ? "clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);"
          : "clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 0% 50%);"}
    }
    span {
      &:before {
        width: 100%;
        transition-delay: 0s;
      }
      &:after {
        height: 100%;
        transition-delay: 0.2s;
      }
      span:before {
        right: 0;
        bottom: 0;
        width: 100%;
        transition-delay: 0.4s;
      }
      span:after {
        left: 0;
        bottom: 0;
        height: 100%;
        transition: all 0.8s cubic-bezier(0.18, 0.74, 0.34, 0.99);
        transition-delay: 0.6s;
      }
    }
    dl dt span {
      opacity: 1;
      transition-delay: 0.2s;
      &:first-child {
        right: 0;
        transform: translateY(0px);
      }
      &:last-child {
        left: 0;
        transform: translateY(0px);
      }
    }
    dl dd {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`;

const StyledCardAlbumMeta = styled.dl`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0 50px;
  dt {
    position: relative;
    display: block;
    height: 50px;
    font-size: 3.3rem;
    font-weight: 900;
    color: ${(p: IStyledAlbum) => p.color};
    text-transform: capitalize;
    span {
      display: block;
      position: absolute;
      height: 50%;
      width: 100%;
      overflow: hidden;
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.46, 0.45, 0.02, 0.99);
      transition-delay: 0s;
      &:first-child {
        top: 0;
        right: 70px;
      }
      &:last-child {
        bottom: 0;
        left: 70px;
      }
      &:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        content: attr(title);
        display: block;
      }
      &:first-child:before {
        top: 10%;
      }
      &:last-child:before {
        bottom: 90%;
      }
    }
  }
  dd {
    font-size: 2.5rem;
    color: ${(p: IStyledAlbum) => p.color};
    font-weight: 200;
    opacity: 0;
    transition: all 0.4s;
    transition-delay: 0s;
    text-transform: capitalize;
  }
`;

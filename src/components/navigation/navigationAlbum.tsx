import React from "react";
import styled from "styled-components";

interface INavigationAlbum {
  albumArt: string;
  index: number;
  direction: "next" | "prev";
  primary: string;
  tertiary: string;
  callback?: (direction: string) => void;
}

interface IStyledNavItem {
  position: "next" | "prev";
  background: string;
  color: string;
}

const NavigationAlbum = (props: INavigationAlbum) => {
  function toSlide(e: any, direction: string) {
    if (typeof props.callback === 'function') {
      props.callback(direction);
    }
    e.preventDefault();
  }
  return (
    <StyledNavItem
      href="#nav"
      onClick={e => toSlide(e, props.direction)}
      position={props.direction}
      background={props.primary}
      color={props.tertiary}
    >
      <span>{props.direction}</span>
      <img src={props.albumArt} alt="" />
    </StyledNavItem>
  );
};

export default NavigationAlbum;

const StyledNavItem = styled.a`
  position: absolute;
  top: 50%;
  background: ${(p: IStyledNavItem) => p.background};
  transform: translateY(-50%) ${(p: IStyledNavItem) => p.position === 'next' ? 'translateX(80%)' : 'translateX(-80%)'};
  display: block;
  ${(p: IStyledNavItem) => p.position === 'next' ? 'right: 0' : 'left: 0'};
  transition: all .4s;
  z-index: 10;
  color: ${(p: IStyledNavItem) => p.color};
  border: 3px solid ${(p: IStyledNavItem) => p.background};
  text-align: center;
  text-decoration: none;
  span{
    display: block;
    padding: 20px 50px;
    position: relative;
    z-index: 1;
    font-size: 5.0rem;
    font-weight: 900;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity .3s;
    transition-delay: 0s;
  }
  img {
    display: inline-block;
    position: absolute;
    z-index: 0;
    width: 100%;
    max-width: 90px;
    top: 50%;
    transform: translateY(-50%);
    ${(p: IStyledNavItem) => p.position === 'next' ? 'left: 5px' : 'right: 5px'};
  }
  &:hover{
    transform: translateY(-50%) translateX(0px);
    span{opacity:1;transition-delay: .3s;}
  }
`;

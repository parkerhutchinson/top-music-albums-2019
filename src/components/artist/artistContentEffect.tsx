import React, {useRef, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import styled from 'styled-components';

interface IArstistContentEffect {
  title: string
  element: "h1" | "h2" | "h3" | "h4" | "p"
  duration: number
  staggerDuration: number
}

const ArtistContentEffect = (props: IArstistContentEffect) => {
  const titleRef = useRef(null);
  const tl = gsap.timeline();


  function createTitleSpans(title:string) {
    return title.split('').map((e:any,i:number) => (
      <span key={i}>{e}</span>
    ));
  }

  useLayoutEffect(() => {
    const spans = ReactDOM.findDOMNode(titleRef.current);
    //@ts-ignore
    tl.to((spans.querySelector(props.element).childNodes), {
      opacity: 1,
      top:0,
      stagger: {
        each: props.staggerDuration
      },
      //@ts-ignore
      duration: props.duration,
      ease: 'expo'
    })
  },[titleRef]);

  return (
    <StyledTitle ref={titleRef}>
      {
        React.createElement(props.element, [], createTitleSpans(props.title))
      }
    </StyledTitle>
  )
}


export default ArtistContentEffect;


const StyledTitle = styled.div`
  font-weight: 900;
  position: relative;
  overflow: hidden;
  span{
    opacity: 0;
    position: relative;
    top: 40px;
  }
  h1,h2,h3{
    margin-bottom: 30px;
  }
  p{
    margin-bottom: 80px;
  }
`;
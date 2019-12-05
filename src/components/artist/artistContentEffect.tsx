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
  const titleRef:any = useRef(null);
  const tl = gsap.timeline();


  function createTitleSpans(title:string) {
    return title.split('').map((e:any,i:number) => (
      <span key={i}>{e}</span>
    ));
  }

  useLayoutEffect(() => {
    //@ts-ignore
    const spans = ReactDOM.findDOMNode(titleRef.current).querySelector(props.element).childNodes;
    
    tl.to((spans), {
      opacity: 1,
      top:0,
      stagger: {
        each: props.staggerDuration
      },
      duration: props.duration,
      ease: 'expo'
    })
  },[titleRef.current]);

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
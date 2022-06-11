
import styled from 'styled-components';

export const UnityBlogCardBG = styled.div`
position: relative;
  border-radius: 10px;
  /* box-shadow: 3px 3px 20px #00ccff; */
  text-align: center;
  justify-self: center;

  width: 100%;
  max-width: 900px;
  min-height: 500px;
  height: auto;

  background-color: rgba(0, 0, 0, 1);

  &::before {
    content: '';
    position: absolute;
    background: white;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    background: linear-gradient(315deg, #00ccff, rgba(0, 0, 0, 1), #d400d4);
    transform: skewX(1deg) skewY(2deg);

  }

  &::after {
    content: '';
    position: absolute;
    background: white;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    background: linear-gradient(315deg, #00ccff, rgba(0, 0, 0, 1), #d400d4);
    transform: skewX(1deg) skewY(2deg);
    filter: blur(25px);
    
  }

  @media ${ (props) => props.theme.breakpoints.sm } {
    width: 100%;
    min-height: 300px;
  }
`;


export const TitleContent = styled.div`
  color: #9cc9e3;
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1.5rem;
  @media ${ (props) => props.theme.breakpoints.md } {
    margin-top: 0.5rem;
}
`;


export const HeaderThree = styled.h3`
  /* font-family: var(--font-button); */
  font-family: "Aquire";
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${ (props) => props.title ? '2rem' : '2rem' };
  
  @media ${ (props) => props.theme.breakpoints.sm } {
  margin-left: 32px;
  margin-right: 32px;
  justify-self: start;
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0rem;
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0 15px 0;

  @media ${ (props) => props.theme.breakpoints.sm } {
    flex-direction: column;
    row-gap: 1rem;
    margin: 1rem 2rem;
}
`;

export const ExternalLinks = styled.a`
text-align: center;
color:black;
font-size: 1.3rem;
padding:1rem 1.5rem;
background: #9cc9e3;
border-radius: 15px;
text-decoration: none;

/* @media ${ (props) => props.theme.breakpoints.sm } {
  padding:1rem 0.2rem;
} */


&:hover{
  transition: background 0.5s;
  background: #00ccff;
}
`;
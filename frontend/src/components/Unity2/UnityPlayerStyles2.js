
import styled from 'styled-components';
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
  font-family: var(--font-button);
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
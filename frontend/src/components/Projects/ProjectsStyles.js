import styled from 'styled-components';

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
padding: 3rem;
place-items: center;
/* column-gap: 2rem; */
row-gap: 3rem;
height: auto;

@media ${ (props) => props.theme.breakpoints.sm } {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 0 2rem;
}

@media ${ (props) => props.theme.breakpoints.md } {

}

`
export const BlogCardBG = styled.div`
position: relative;
  border-radius: 10px;
  /* box-shadow: 3px 3px 20px #00ccff; */
  text-align: center;


  width: 100%;
  max-width: 900px;

  min-height: 1000px;
  height: auto;

  background-color: rgba(0, 0, 0, 1);

  /* overflow: hidden; */

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
    height: fit-content;
  }
`;

export const BlogCardFG = styled.span`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 1);
z-index: 1;
`;

export const Img = styled.img`
  width:100%;
  min-height : 505px;
  max-height : 300px;
  object-fit: contain;
  overflow: hidden;
  padding: 6px 6px 0 6px;
  border-radius: 10px;

  @media ${ (props) => props.theme.breakpoints.sm } {
    object-fit: cover;
    min-height : unset;
  }
`
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
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #9cc9e3;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0px 50px 25px 50px;
  color: #e4e6e7;
  font-size: 1rem;
  line-height: 24px;
  text-align: justify;
  @media ${ (props) => props.theme.breakpoints.sm } {
    padding:.3rem;
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
color:black;
font-size: 1.3rem;
padding:1rem 1.5rem;
background: #9cc9e3;
border-radius: 15px;
text-decoration: none;


&:hover{
  transition: background 0.5s;
  background: #00ccff;
}
`;

export const TagList = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
list-style-type: none;
/* place-items: center; */
/* column-gap: 2rem; */
row-gap: 1.5rem;
justify-content: space-around;
white-space: nowrap;
padding: 2rem;

@media ${ (props) => props.theme.breakpoints.sm } {
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  row-gap: 1rem;

  /* grid-template-columns: unset;
  grid-template-rows: repeat(1fr); */
}

`
export const Tag = styled.li`
/* color:#ff275f; */
color:lightgray;
font-size: 1.3rem;

`
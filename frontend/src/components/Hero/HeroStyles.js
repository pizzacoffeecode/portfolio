import styled from 'styled-components';

export const LeftSection = styled.div`
  height: 100vh;
  scroll-snap-align: start;

  padding: 15rem 0 0rem 0;
  /* padding-bottom: 20px; */

  margin-left: 32px;
  margin-right: 32px;
  align-items: center;
  justify-content: center;

  @media ${ (props) => props.theme.breakpoints.sm } {
    height: 70vh;
    padding: unset;
    padding-top: 20vh;

  }
  @media ${ (props) => props.theme.breakpoints.md } {


  }
  @media ${ (props) => props.theme.breakpoints.lg } {

  }
`;

export const RightSection = styled.div`

  scroll-snap-align: start;
  margin-top: -2rem;
  width: 30vw;


  @media ${ (props) => props.theme.breakpoints.sm } {
    height: 30vh;
  }
  @media ${ (props) => props.theme.breakpoints.md } {
    /* display:none;
    visibility: hidden; */
  }
  @media ${ (props) => props.theme.breakpoints.lg } {

  }
`;
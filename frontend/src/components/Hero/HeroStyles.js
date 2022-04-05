import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  flex-direction: column;
  @media ${ (props) => props.theme.breakpoints.sm } {
    margin: 0 auto;
  }
  @media ${ (props) => props.theme.breakpoints.md } {
    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  flex-direction: column;
  padding-bottom: 18%;
  @media ${ (props) => props.theme.breakpoints.sm } {
    display: none;
  }
  @media ${ (props) => props.theme.breakpoints.md } {
    display:none;
  }
`;
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100vw;
  /* max-width: 1280px; */
  /* height: calc(100vh - 60px); */
  margin-top: 100px;
  min-height: 2000px;
  /* padding: 2rem 48px 40px;
  margin: 1rem auto; */
  box-sizing: content-box;
  align-items: center;
  justify-content: center;



  margin: 0 auto;

    /* ff 3.6+ */
    background:-moz-radial-gradient(circle at 70% 20%, rgba(70, 1, 95, 1) 0%, rgba(10, 12, 37, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(circle at 70% 20%, rgba(70, 1, 95, 1) 0%, rgba(10, 12, 37, 1) 100%);

    /* opera 11.10+ */
    background:-o-radial-gradient(circle at 70% 20%, rgba(70, 1, 95, 1) 0%, rgba(10, 12, 37, 1) 100%);

    /* ie 10+ */
    background:-ms-radial-gradient(circle at 70% 20%, rgba(70, 1, 95, 1) 0%, rgba(10, 12, 37, 1) 100%);

    /* global 92%+ browsers support */
    background:radial-gradient(circle at 70% 20%, rgba(70, 1, 95, 1) 0%, rgba(10, 12, 37, 1) 100%);
  @media ${ props => props.theme.breakpoints.sm } {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`




// max-width: 1280px;
// width: 100%;
// margin: auto;
// `;

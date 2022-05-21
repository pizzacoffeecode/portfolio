import styled from "styled-components"

// Social Icons 
// export const SocialIconsContainer = styled.div`
// max-width: 1040px;
// display: flex;
// justify-content: space-between;

// @media ${ props => props.theme.breakpoints.md }{
//   display: flex;
//   justify-content: space-between;
// }

// @media ${ props => props.theme.breakpoints.sm }{
//   display: flex;
// 	width: 100%;
//   flex-direction: column;
// }
// `
export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2rem;

	@media ${ props => props.theme.breakpoints.md }{
		justify-content: center;
		flex-wrap: wrap;
	}
`
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 0px 8px 0px 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;
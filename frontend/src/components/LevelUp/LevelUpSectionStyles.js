import styled from 'styled-components'

export const SkillContainer = styled.div`
display: grid;
grid-template-columns: 25px 1fr;
grid-template-rows: auto 1fr;
height: fit-content;
align-items: center;
transition: 2s;
`
export const SubSkillContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto 1fr;
height: fit-content;


`

export const LevelUpBackground = styled.div`
width: 100%;
height: auto;
/* background-color: whitesmoke; */
background: linear-gradient(45deg, rgba(0, 194, 255, 1), rgba(250, 0, 255, 1));
padding: 2px;
margin: 5px;
border-radius: 10px;
`

export const LevelUpContainer = styled.div`
/* display: flex; */
width: 100%;
height: 30px;
/* background-color: gray; */
background: #000000;
overflow: hidden;

display: flex;
align-items: center;
justify-content: start;
border-radius: 10px;
`

export const Text = styled.p`
/* font-family: var(--font-button); */
font-family: "Aquire";
color: whitesmoke;
position: absolute;
font-size: 18px;
padding: 0 0 0 1rem;
z-index: 5;
@media ${ props => props.theme.breakpoints.sm } {
		font-size: 14px;
	}
`

export const ClipPath = styled.img`
position: relative;
width: 100%;
height: 100%;
background-image: ${ (props) => `linear-gradient(to right, 
${ props.color2 },  ${ props.color1 })` };

clip-path: ${ (props) => `polygon( 
    0% 0%, 
    ${ props.level * 10 }% 0%,
    ${ props.level * 10 -
        (
            props.level === 10 ? 0 : 3
        )
        }% 100%,
    0% 100%
)`};

z-index: 1;
`

// grid - auto - flow : ${ (props) => props.gridrow ? "row" : "column" };


// ${ (props) => (props.level), "%" }

// ${ (props) => (props.level * 10) - (props.level == 10 ? 0 : 5), "%" }

/* ${ props.level + "%" } */

// clip-path: polygon(
//     0% 0%,
//     ${ (props) => props.level + "%" } 0%,
//     10% 100%,
//     0% 100%
// );
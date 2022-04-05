import styled from 'styled-components'

export const LevelUpBackground = styled.div`
width: 100%;
height: 100%;
background-color: whitesmoke;
padding: 2px;
margin: 5px;
border-radius: 10px;
`

export const LevelUpContainer = styled.div`
/* display: flex; */
width: 100%;
height: 30px;
background-color: gray;
overflow: hidden;

display: flex;
align-items: center;
justify-content: start;
border-radius: 10px;
`

export const Text = styled.p`
color: white;
position: absolute;

font-size: 20px;

padding: 0 0 0 1rem;
z-index: 5;
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
import styled, { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
    10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }

    33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
`



export const PlusIcon = styled.img`

width: 30px;
height: auto;
animation-name: ${ breatheAnimation };
 animation-duration: 2s;
 animation-iteration-count: infinite;

&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

export const MinusIcon = styled.img`
width: 30px;
height: auto;

&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

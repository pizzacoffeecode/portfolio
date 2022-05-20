import React from 'react';
import { ButtonBack, ButtonFront } from '../Section/Section';

const Button = (props) => (
    <ButtonBack alt={ props.alt } form={ props.form } disabled={ props.disabled }>{ props.children }
        <ButtonFront id='learn' alt={ props.alt } onClick={ props.onClick } disabled={ props.disabled }>{ props.children }</ButtonFront>
    </ButtonBack>
);

export default Button

import React, { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon } from './PlusMinusIconStyles';

const PlusMinusIcon = ({ handleExpand, id, show }) => {
    const [ isOpen, setIsOpen ] = useState()


    useEffect(() => {
        handleExpand(isOpen, id)
    }, [ isOpen ])


    return (
        <div type="button" onClick={ (e) => { setIsOpen(!isOpen); } }>
            {
                !isOpen ? (
                    <PlusIcon src={ `${ process.env.PUBLIC_URL }/images/plus_icon.svg` } />
                ) :
                    (
                        <MinusIcon src={ `${ process.env.PUBLIC_URL }/images/minus_icon.svg` } />
                    )
            }
        </div>
    )
}

export default PlusMinusIcon
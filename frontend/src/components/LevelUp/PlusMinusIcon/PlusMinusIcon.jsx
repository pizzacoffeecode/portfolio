import React, { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon } from './PlusMinusIconStyles';

const PlusMinusIcon = ({ handleExpand, skillId, subjectId, openState }) => {
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(() => {
        handleExpand(skillId, subjectId, isOpen)
    }, [ isOpen ]) // eslint-disable-line react-hooks/exhaustive-deps

    // const onClicked = useCallback(() => {
    //     handleExpand(skillId, subjectId, isOpen)
    // }, [ isOpen ]);




    return (
        <div type="button" onClick={ () => { setIsOpen(!openState) } }>
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
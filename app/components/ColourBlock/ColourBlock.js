import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

import getRGB from '../../helpers/getRGB';

const ColourBlock = style.li`
    display: block;
    width: 100px;
    height:  100px;
    margin: 30px 0;
    border: 1px solid #333;
    background-color: rgb(${props => props.rgb});

    &.small {
        width: 20px;
        height: 20px;
    }

    &.dragging {
        opacity: 0.5;
    }
`;

ColourBlock.propTypes = {
    onClick: PropTypes.func,
    colour: PropTypes.object,
}

export default React.memo(({ colour, onClick, dragging }) => (
    <ColourBlock
        rgb={getRGB(colour)}
        onClick={onClick || null}
        className={dragging ? 'dragging' : null}
    />)
);
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
    &:first-child {
        margin-top: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
`;

ColourBlock.propTypes = {
    onClick: PropTypes.func,
    colour: PropTypes.object,
}

export default React.memo(({ colour, onClick }) => (
    <ColourBlock
        rgb={getRGB(colour)}
        onClick={onClick}
    />)
);
import React from 'react';
import style from 'styled-components';
import PropTypes from 'prop-types';

const List = style.ul`
    display: inline-block;
    padding: 30px;
    background-color: #FFF;
    border: 1px solid pink;
    margin: 0 auto;
    min-height: calc(300px + 30px * 4 + 2px);
    min-width: calc(100px + 30px * 2);
`;
const Title = style.h2`
    font-weight: 100;
    text-align: center;
    margin-top: 15px;
`;
const Wrapper = style.section`
    display: inline-block;
`;

const ColourList = ({ title, children }) => (
    <Wrapper>
        <List>
            {children}
        </List>
        {title && <Title>{title}</Title>}
    </Wrapper>
);

ColourList.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array,
    test: PropTypes.string.isRequired
}

export default React.memo(ColourList);
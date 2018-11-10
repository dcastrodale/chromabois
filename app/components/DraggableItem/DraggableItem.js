import React, { Component } from 'react';
import style from 'styled-components';

const DraggableWrapper = style.div`
    position: ${props => props.dragging ? 'absolute' : 'relative'}
`;

class DraggableItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {
            children
        } = this.props;

        return (
            <DraggableWrapper>
                {children}
            </DraggableWrapper>
        );
    }
}

export default DraggableItem;
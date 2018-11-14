import React, { Component } from 'react';
import style from 'styled-components';

import { selectColour } from '../../actions/Colours';

import { connect } from 'react-redux';

const DroppableContainer = style.section`
    width: 100%;
    height: 100%;
`;

class DropColourContainer extends Component {
    constructor(props){
        super(props);

        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDragOver(e){
        e.preventDefault();
    }

    onDrop(e){
        const colourID = e.dataTransfer.getData('colourID');
        this.props.selectColour(colourID);
    }

    render(){
        const {
            children
        } = this.props;

        return (
            <DroppableContainer
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
            >
                {children}
            </DroppableContainer>
        );
    }
}


export default connect(undefined, { selectColour })(DropColourContainer);
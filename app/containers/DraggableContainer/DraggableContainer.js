import React, { Component } from 'react';

import ColourBlock from '../../components/ColourBlock';

export default class DraggableContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            dragging: false
        };

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragStart(e){
        if (this.props.handleDragStart) {
            this.props.handleDragStart(e);
        }

        this.setState({
            dragging: true
        });
    }

    onDragEnd(){
        if (this.props.handleDragEnd) {
            this.props.handleDragEnd(e);
        }

        this.setState({
            dragging: false
        });
    }

    renderChildren(){
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                dragging: this.state.dragging
            });
        });
    }

    render(){
        const {
            children
        } = this.props
        return (
            <div
                draggable
                onDragStart={(e) => this.onDragStart(e)}
                onDragEnd={(e) => this.onDragEnd(e)}
            >
                {this.renderChildren()}
            </div>
        );
    }
}
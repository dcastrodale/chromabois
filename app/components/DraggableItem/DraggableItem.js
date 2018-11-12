import React, { Component } from 'react';
import style from 'styled-components';

const DraggableWrapper = style.div``;

const DraggableChild = style.div`
    transform: translateX(${props => props.x}px) translateY(${props => props.y}px);
    position: relative;
    z-index: 1000;
`;

class DraggableItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            x: 0,
            y: 0,
            lastX: 0,
            lastY: 0
        };
        this.clickOffsetX = 0;
        this.clickOffsetY = 0;
        this.itemRef = React.createRef();
        this.itemPos = {};
        this.startDragging = this.startDragging.bind(this);
        this.stopDragging = this.stopDragging.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    startDragging(event){
        const clientPos = this.itemRef.current.getBoundingClientRect();

        this.itemPos = {
            x: clientPos.left,
            y: clientPos.top
        }

        this.clickOffsetX = event.clientX - this.itemPos.x;
        this.clickOffsetY = event.clientY - this.itemPos.y;
        this.setState({
            dragging: true
        });
    }

    stopDragging(){
        this.setState({
            dragging: false,
            lastX: this.state.x,
            lastY: this.state.y
        });
    }

    handleMouseMove(event){
        this.setState({
            x: (event.clientX - this.clickOffsetX - this.itemPos.x) + this.state.lastX,
            y: (event.clientY - this.clickOffsetY - this.itemPos.y) + this.state.lastY
        });
    }

    render(){
        const {
            children
        } = this.props;

        return (
            <DraggableWrapper>
                {React.Children.map(children, child => (
                    <DraggableChild
                        x={this.state.x}
                        y={this.state.y}
                        ref={this.itemRef}
                        onMouseDown={this.startDragging}
                        onMouseUp={this.stopDragging}
                        onMouseOut={this.stopDragging}
                        onMouseMove={this.state.dragging ? this.handleMouseMove : null}
                    >
                        {child}
                    </DraggableChild>
                ))}
            </DraggableWrapper>
        );
    }
}

export default DraggableItem;
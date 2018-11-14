import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectColour } from '../../actions/Colours';

import DraggableContainer from '../DraggableContainer';
import ColourList from '../../components/ColourList';
import ColourBlock from '../../components/ColourBlock';

class AvailableColoursList extends Component {
    handleClick(id) {
        this.props.selectColour(id);
    }

    // Factory that returns a composed function with colourID set
    getDragFunction(colourID){
        return (e) => {
            e.dataTransfer.setData('colourID', colourID);
        }
    }

    render() {
        const {
            available
        } = this.props;

        return (
            <ColourList title="available">
                {
                    available.map(colour => (
                        <DraggableContainer
                            key={colour.id}
                            handleDragStart={this.getDragFunction(colour.id)}
                        >
                            <ColourBlock
                                colour={colour}
                                dragging={this.props.dragging}
                            />
                        </DraggableContainer>
                    ))
                }
            </ColourList>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectColour }, dispatch);
};

const mapStateToProps = ({ colours }) => {
    return {
        available: colours.available
    }
}

AvailableColoursList.propTypes = {
    available: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableColoursList);
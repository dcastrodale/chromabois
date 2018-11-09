import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectColour } from '../../actions/Colours';

import ColourList from '../../components/ColourList';
import ColourBlock from '../../components/ColourBlock';

class AvailableColoursList extends Component {
    handleClick(id) {
        this.props.selectColour(id);
    }

    render() {
        const {
            available
        } = this.props;

        return (
            <ColourList title="available">
                {available.map(colour => (
                    <ColourBlock
                        colour={colour}
                        onClick={() => this.handleClick(colour.id)}
                        key={colour.id}
                    />
                ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(AvailableColoursList);
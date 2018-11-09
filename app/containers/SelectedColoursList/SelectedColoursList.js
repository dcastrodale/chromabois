import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from 'styled-components';

import ColourList from '../../components/ColourList';
import ColourBlock from '../../components/ColourBlock';

const MakeItRight = style.section`
    position: absolute;
    right: 0;
    top: 0;
`;

class SelectedColoursList extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {
            selected,
        } = this.props;

        return (
            <MakeItRight>
                <ColourList title="selected">
                    {selected.map(colour => (
                        <ColourBlock
                            colour={colour}
                            onClick={() => console.log('click selected')}
                        />
                    ))}
                </ColourList>
            </MakeItRight>
        );
    }
}


const mapStateToProps = ({ colours }) => {
    return {
        selected: colours.selected
    }
}

export default connect(mapStateToProps)(SelectedColoursList);
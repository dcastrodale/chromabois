import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GlobalStyles from '../../global-styles';
import getRGB from '../../helpers/getRGB';

import AvailableColoursList from '../AvailableColoursList';
import SelectedColoursList from '../SelectedColoursList';
import DropColourContainer from '../DropColourContainer';

const AppOuter = styled.section`
    height: 100%;
    width: 100%;
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 30px;
    background-color: rgb(${({ colours }) => getRGB(colours.averaged)});
    transition: background-color 0.2s ease-in-out;
    position: relative;
`;

const AppWrapper = styled.div`
    min-height: 100%;
    width: 100%;
    max-width: 768px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;

const Header = styled.header`
    font-family: Helvetica, Arial, sans-serif;
`;

const H1 = styled.h1`
    color: pink;
    letter-spacing: 0;
    border-bottom: 3px solid pink;
`;

const Lists = styled.section`
    position: relative;
`;

const Test = styled.section`
    height: 200px;
    width: 200px;
    bordeR: 1px solid #000;
`;

class App extends Component {
    render() {
        const {
            colours,
        } = this.props;

        return(
            <AppOuter {...this.props}>
                <AppWrapper>
                    <Header>
                        <H1>Colour Mixer</H1>
                    </Header>
                    <Lists>
                        <AvailableColoursList />
                        <SelectedColoursList />
                        <Test>
                            <DropColourContainer />
                        </Test>
                    </Lists>
                    <GlobalStyles />
                </AppWrapper>
            </AppOuter>
        );
    }
}

const mapStateToProps = ({ colours, UI }) => {
    return {
        colours,
        UI
    }
}

App.propTypes = {
    colours: PropTypes.object
}
export default connect(mapStateToProps)(App);
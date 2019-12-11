import React, { Component } from 'react';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
class SuccessResponse extends Component {
    render() {
        return(
            <Container>
                <LottieView source={require('./../assets/lottie-ae.json')} />
            </Container>
        )
    }
}

export default SuccessResponse;

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`;
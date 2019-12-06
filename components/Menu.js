import React, { Component } from "react";
import styled from 'styled-components';
import { Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
class Menu extends Component {
    state = {
        top: new Animated.Value(900),
    }

    componentDidMount() {
        Animated.spring(this.state.top, {
            toValue: 0,
        }).start()
    }

    toggleMenu = () => {
        Animated.spring(this.state.top, {
            toValue: 900
        }).start()
    }

    render() {
        return(
            <AnimatedContainer style={{ top: this.state.top }}>
                <Cover />
                <TouchableOpacity onPress={ this.toggleMenu }>
                    <CloseView>
                        <Ionicons name="md-close" size={40} color="#546bfb" />
                    </CloseView>
                </TouchableOpacity>
                <Content />
            </AnimatedContainer>
        )
    }
}

export default Menu;

const Container = styled.View`
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)
const Cover = styled.View`
    height: 142px;
    background-color: #000000;
`;
const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: #ffffff;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    height: 900px;
    background-color: #f0f3f5;
`;
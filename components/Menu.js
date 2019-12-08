import React, { Component } from "react";
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { list } from "./Asset";
import MenuList from './MenuList';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function mapStateToProps(state) {
    return { action: state.action };
}

function mapDispatchToProps(dispatch) {
    return {
        closeMenu: () => dispatch({
            type: 'CLOSE_MENU'
        })
    }
}


class Menu extends Component {
    state = {
        top: new Animated.Value(screenHeight),
    }

    componentDidMount() {
        this.toggleMenu();
    }

    componentDidUpdate() {
        this.toggleMenu();
    }

    toggleMenu = () => {
        if(this.props.action == 'openMenu') {
            Animated.spring(this.state.top, {
                toValue: 0,
            }).start()
        }
        
        if(this.props.action == 'closeMenu') {
            Animated.spring(this.state.top, {
                toValue: screenHeight
            }).start()
        }
       
    }

    render() {
        return(
            <AnimatedContainer style={{ top: this.state.top }}>
                <Cover>
                    <Image source={require('./../assets/background2.jpg')} />
                    <Title>Bluebird2000</Title>
                    <Subtitle>Designer @ ATBTechsoft</Subtitle>
                </Cover>
                <TouchableOpacity onPress={ this.props.closeMenu } style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1 }}>
                    <CloseView>
                        <Ionicons name="md-close" size={40} color="#546bfb" />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    {list.map((el, index) => (
                        <MenuList
                            key={ index }
                            icon={ el.icon }
                            title={ el.title }
                            text={ el.text }
                        />
                    ))}
                </Content>
            </AnimatedContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

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
    justify-content: center;
    align-items: center;
`;

const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Title = styled.Text`
    color: #ffffff;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const Subtitle = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
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
    height: ${screenHeight};
    background-color: #f0f3f5;
    padding: 50px;
`;



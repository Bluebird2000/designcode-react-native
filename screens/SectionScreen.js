import React, { Component } from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Dimensions, StatusBar, Button } from 'react-native';
const screenWidth = Dimensions.get('window').width;
class SectionScreen extends Component {
   static navigationOptions = {
       header: null
   }
  componentDidMount() {
      StatusBar.setBarStyle('light-content', true);
  }

  componentWillUnmount() {
      StatusBar.setBarStyle('dark-content', true);
  }

    render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
        return (
            <Container>
                <StatusBar hidden />
                <Cover>
                    <Image source={ section.image } />
                    <Wrapper>
                        <Logo source={ section.logo } />
                        <SubTItleContent>{ section.caption }</SubTItleContent>
                    </Wrapper>
                    <Title>{ section.title }</Title>
                    <Caption>{ section.caption }</Caption>
                    <Subtitle>{ section.subtitle }</Subtitle>
                </Cover>
                <TouchableOpacity style={{ position: "absolute", top: 20, right: screenWidth / 10 }} onPress={() => this.props.navigation.goBack()}>
                    <CloseView>
                        <Ionicons name="md-close" size={24} />
                    </CloseView>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default SectionScreen;

const Container = styled.View`
    flex: 1;
`;

const Cover = styled.View`
    height: 375px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`;
const Title = styled.Text`
    position: absolute;
    top: 78px;
    left: 20px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    width: 180px
`;
const Caption = styled.Text`
    color: white;
    position: absolute;
    left: 20px;
    bottom: 40px;
    font-size: 17px;
`;

const Subtitle = styled.Text`
    color: white;
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 17px;
`;
const CloseView = styled.View`
    width: 32px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    position: absolute;
`;
const Wrapper = styled.View`
    flex-direction: row;
    position: absolute;
    top: 30px;
    left: ${screenWidth / 20};
    align-items: center;
`;

const Logo = styled.Image`
    width: 24px;
    height: 24px;
`;

const SubTItleContent = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    margin-left: 5px;
    text-transform: uppercase;
`;
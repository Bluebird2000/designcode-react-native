import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { BlurView } from 'expo-blur';
import SuccessResponse from '../util/SuccessResponse';
class ModalLogin extends Component {
    state = {
        email: "",
        password: "",
        iconEmail: require('../assets/icon-email.png'),
        IconPassword: require('../assets/icon-password.png')
    }

    handleLogin = () => {
        console.log(`Email: ${ this.state.email }, Password: ${ this.state.password }`);
    }

    focusEmail = () => {
        this.setState({
            iconEmail: require('../assets/icon-email-animated.gif'),
            IconPassword: require('../assets/icon-password.png')
        });
    }

    focusPassword = () => {
        this.setState({
            IconPassword: require('../assets/icon-password-animated.gif'),
            iconEmail: require('../assets/icon-email.png'),
        })
    }

    keyboardDismissal = () => {
        Keyboard.dismiss();
    }
    render() {
        return(
            <Container>
                <TouchableWithoutFeedback onPress={ this.keyboardDismissal }>
                    <BlurView tint="default" intensity={100} style={{ position: "absolute", width: "100%", height: "100%" }} />
                </TouchableWithoutFeedback>
                <KeyboardAvoidingView behavior="padding" style={{ paddingTop: 50 }}>

                    <Modal>
                        <Logo source={require('../assets/logo-react.png')} resizeMode="contain" />
                        <Text>S3 leasing, All in one Investment Platform</Text>
                            <TextInput onChangeText={ email => this.setState({ email }) } placeholder="email" keyboadType="email-address" onFocus={ this.focusEmail } />
                            <TextInput onChangeText={ password => this.setState({ password}) } placeholder="password" secureTextEntry={true} onFocus= { this.focusPassword } />
                        <IconEmail source={ this.state.iconEmail } />
                        <IconPassword source={ this.state.IconPassword } />
                        <TouchableOpacity onPress={ this.handleLogin }>
                            <Button>
                                <ButtonText> Log In </ButtonText>
                            </Button>
                        </TouchableOpacity>
                    {/* <SuccessResponse /> */}
                    </Modal>
                    </KeyboardAvoidingView>

            </Container>
        )
    }
}

export default ModalLogin;

const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    justify-content: center;
    align-items: center;
`;

const Modal = styled.View`
    width: 335px;
    height: 370px;
    background: #ffffff;
    border-radius: 20px;
    elevation: 5;
    align-items: center;
`;

const Logo = styled.Image`
    width: 44px;
    height: 44px;
    margin-top: 50px;
`;

const Text = styled.Text`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    width: 200px;
    text-align: center;
    color: #b8bece;
`;

const TextInput = styled.TextInput`
    border: 1px solid #dbdfea;
    width: 295px;
    height: 44px;
    margin-top: 20px;
    border-radius: 15px;
    color: #3C4560;
    font-size: 17px;
    padding-left: 44px;
`;

const Button = styled.View`
    background: #5263ff;
    width: 295px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-top: 20px;
`;

const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
`;

const IconEmail = styled.Image`
    width: 24px;
    height: 16px;
    position: absolute;
    top: 184px;
    left: 31px;
   
`;

const IconPassword = styled.Image`
    width: 18px;
    height: 24px;
    position: absolute;
    top: 244px;
    left: 31px;
`;
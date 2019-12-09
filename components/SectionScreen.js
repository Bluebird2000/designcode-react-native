import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';


class SectionScreen extends Component {

   static navigationOptions = {
       header: null
   }

    render() {
        return (
            <Container>
                <Text>Section screen</Text>
                <Button title="cancel" onPress={() => this.props.navigation.goBack()} />
            </Container>
        )
    }
}

export default SectionScreen;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    font-size: 24px;
    color: #0066cc;
`;

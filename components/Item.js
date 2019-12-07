import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const ItemMenu = props => (
    <Container>
        <IconView>
            <Ionicons name="md-settings" size={24} color="#546bfb" />
        </IconView>
        <Content>
            <Title>Account</Title>
            <Text>settings</Text>
        </Content>
    </Container>
)

export default ItemMenu;

const Container = styled.View`
    flex-direction: row;
    margin: 15px 0;
`;
const IconView = styled.View`
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
`;
const Content = styled.View`
    padding-left: 20px;
`;
const Title = styled.Text`
    color: #3c4560;
    font-size: 24px;
    font-weight: 600;
`;
const Text = styled.Text`
    color: #3c4560;
    font-weight: 600;
    opacity: 0.6;
    margin-top: 5px;
`;
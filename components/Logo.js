import React from 'react';
import styled from "styled-components";

const Logo = props => (
    <Container>
        <Image source={ props.image } resizeMode="contain" />
        <Text>{ props.title }</Text>
    </Container>
)

export default Logo;

const Container = styled.View`
    flex-direction: row;
    background-color: #ffffff;
    height: 60px;
    padding: 12px 16px 12px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0,0,0, 0.25);
    margin: 12px 5px;
    align-items: center;
`;
const Image = styled.Image`
    width: 36px;
    height: 36px;
`;
const Text = styled.Text`
    font-weight: 600;
    font-size: 17px;
    margin-left: 8px;
`;

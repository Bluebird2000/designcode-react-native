import React from 'react';
import styled from 'styled-components';
const Course = props => (
    <Container>
        <Cover>
            <Image source={ props.image } />
            <Logo source={ props.logo } resizeMode="contain" />
            <Subtitle>{ props.subtitle }</Subtitle>
            <Title>{ props.title }</Title>
        </Cover>
        <Content>
            <Wrapper>
                <Avatar source={ props.avatar } />
                <CaptionWrapper>
                    <Caption>{ props.caption }</Caption>
                    <Author>Taught By { props.author }</Author>
                </CaptionWrapper>
            </Wrapper>
        </Content>
    </Container>
)

export default Course

const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px;
`;

const CaptionWrapper = styled.View`
    flex-direction: column;
    margin-right: 10px;
`;

const Container = styled.View`
    width: 90%;
    height: 335px;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius: 14px;
    box-shadow: 0 10px 20px #000000;
    margin-bottom: 10px;
    margin-top: 20px;
    
`;

const Cover = styled.View`
    height: 260px;
    overflow: hidden;
    justify-content: flex-end;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const Logo = styled.Image`
    width: 48px;
    height: 48px;
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -24px;
`;

const Subtitle = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: rgba(255,255,255, 0.8);
    text-transform: uppercase;
    margin-left: 20px
`;

const Title = styled.Text`
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
    margin-top: 4px;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 170px;
`;

const Content = styled.View``;

const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    
    border-radius: 16px;
`;

const Caption = styled.Text`
    font-size: 14px;
    color: #3c45e0;
    font-weight: 500;
`;

const Author = styled.Text`
    font-size: 13px;
    color: #b0bece;
    font-weight: 500;
    margin-top: 4px;
`;
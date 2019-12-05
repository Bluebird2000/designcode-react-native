import React, { Component } from 'react';
import { ScrollView, SafeAreaView, Platform } from "react-native";
import styled from 'styled-components';
import Card from "./Card";
import { NotificationIcon } from './Icons';
import Logo from './Logo';
import { logos, cards } from './Asset';

const Index = props => (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <Avatar source={require('./../assets/avatar.jpg')} />
              <Title>Welcome Back,</Title>
              <Name>Bluebird</Name>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
               />
            </TitleBar>
           <ScrollView
              style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }} 
              horizontal={true} showsHorizontalScrollIndicator={false}>
              {logos.map((logo, index) => (
                <Logo
                key={ index }
                image={ logo.image }
                title={ logo.text }
              />
              ))}
           </ScrollView>
            <SubTitle>Birth Of Finratus</SubTitle>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {cards.map((card, index) => (
                <Card 
                  key={ index }
                  image={ card.image }
                  title={ card.title }
                  logo={ card.logo }
                  caption={ card.caption }
                  subtitle={ card.subtitle }
                />
              ))}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
)

export default Index;

const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;
const TitleBar = styled.View`
  margin-top: 50px;
  width: 100%;
  padding-left: 80px;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: #000000;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  font-size: 20px;
  color: #999999;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #ff5252;
`;
const SubTitle = styled.Text`
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  color: #999999;
  text-transform: uppercase;
`;

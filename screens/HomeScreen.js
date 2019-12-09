import React, { Component } from 'react';
import { ScrollView, SafeAreaView, Platform, TouchableOpacity, Animated, Easing } from "react-native";
import styled from 'styled-components';
import { connect } from 'react-redux';

import Card from "./../components/Card";
import Course from "./../components/Course";
import Logo from './../components/Logo';
import Menu from "./../components/Menu";
import { NotificationIcon } from './../components/Icons';
import { logos, cards, courses } from './../components/Asset';

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
      openMenu: () => dispatch({
          type: 'OPEN_MENU'
      }),
  }
}


class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  sectionNavigationRouteHandler = () => {
    this.props.navigation.push("Section");
  }
  

  render() {
    return (
      <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <TouchableOpacity onPress={ this.props.openMenu } style={{ position: 'absolute', left: 0 }}>
              <Avatar source={require('./../assets/avatar.jpg')} />
            </TouchableOpacity>
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
          <SubTitle>Design + Code</SubTitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
              <TouchableOpacity key={ index } onPress={() => {this.props.navigation.push("Section", { section: card })}} >
                <Card 
                  image={ card.image }
                  title={ card.title }
                  logo={ card.logo }
                  caption={ card.caption }
                  subtitle={ card.subtitle }
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <SubTitle>Popular Courses</SubTitle>
          {courses.map((course, index) => (
            <Course 
              key={ index }
              image={ course.image }
              logo={ course.logo }
              subtitle={ course.subtitle }
              title={ course.title }
              avatar={ course.avatar }
              caption={ course.caption }
              author={ course.author }
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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

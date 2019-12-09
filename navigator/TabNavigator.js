import React, { Component } from 'react';
import styled from 'styled-components';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import { Ionicons } from '@expo/vector-icons';

const activeColor = '#4775f2';
const inActiveColor= '#b8bece';
const Text = styled.Text`
    text-align: center
    margin: 5px;
    font-size: 17px;
    font-weight: normal;
`;

/*************************************** */
const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Section: SectionScreen
}, {
    mode: "modal"
});

HomeStack.navigationOptions = {
    tabBarLabel: () => (
        <Text>S3 Leasing</Text>
    ),
    tabBarIcon: ({ focused }) => (
        <Ionicons name="md-home" size={24} color={ focused ? activeColor : inActiveColor } style={{}}/>
    )
}
/**************************************** */


/**************************************** */
const SectionStack = createStackNavigator({
    Section: SectionScreen
});

SectionStack.navigationOptions = {
    tabBarLabel: () => (
        <Text>My Salary</Text>
    ),
    tabBarIcon: ({ focused }) => (
        <Ionicons name="md-cloud-download" size={24} color={ focused ? activeColor : inActiveColor } />
    )
}
/**************************************** */

/**************************************** */
const CoursesStack = createStackNavigator({
    Courses: SectionScreen,
});

CoursesStack.navigationOptions = {
    tabBarLabel: () => (
        <Text>Finratus</Text>
    ),
    tabBarIcon: ({ focused }) => (
        <Ionicons name="md-wallet" size={24} color={ focused ? activeColor : inActiveColor } />
    )
}
/**************************************** */

/**************************************** */
const ProjectStack = createStackNavigator({
    Courses: SectionScreen,
});

ProjectStack.navigationOptions = {
    tabBarLabel: () => (
        <Text>Wlan</Text>
    ),
    tabBarIcon: ({ focused }) => (
        <Ionicons name="md-globe" size={24} color={ focused ? activeColor : inActiveColor } />
    )
}
/**************************************** */

const TabNavigator = createBottomTabNavigator({
    // Using The Concise Object Literal
    HomeStack, SectionStack, CoursesStack, ProjectStack
});

export default TabNavigator;
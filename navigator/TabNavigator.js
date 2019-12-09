import React, { Component } from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../components/SectionScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen
});

const SectionStack = createStackNavigator({
    Section: SectionScreen
});

const CoursesStack = createStackNavigator({
    Courses: SectionScreen
})

const TabNavigator = createBottomTabNavigator({
    // Using The Concise Object Literal
    HomeStack, SectionStack, CoursesStack
});

export default TabNavigator;
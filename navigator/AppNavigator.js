import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../components/SectionScreen';
import TabNavigator from './TabNavigator';
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Section: SectionScreen
});

export default createAppContainer(TabNavigator);
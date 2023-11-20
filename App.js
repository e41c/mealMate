import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Import your screens from the src folder
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import MapScreen from './src/screens/MapScreen';
import ShareScreen from './src/screens/ShareScreen';
import AboutScreen from './src/screens/AboutScreen';
import SplashScreen from './src/screens/SplashScreen';

// Create stack navigator for Home and RestaurantDetails screens
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
    </HomeStack.Navigator>
  );
}

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Additional SplashScreen, replace with your actual SplashScreen component
function SplashScreenComponent() {
  return (
    <SplashScreen />
  );
}

// Use SplashScreenComponent as the initial route
export function InitialRoute() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="SplashScreen">
        <HomeStack.Screen name="SplashScreen" component={SplashScreenComponent} />
        <HomeStack.Screen name="App" component={App} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  // Your styles here
};

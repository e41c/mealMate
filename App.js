import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import MapScreen from './src/screens/MapScreen';
import ShareScreen from './src/screens/ShareScreen';
import AboutScreen from './src/screens/AboutScreen';
import SplashScreen from './src/screens/SplashScreen';
import 'react-native-vector-icons/FontAwesome';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
         activeTintColor: 'green', 
         inactiveTintColor: 'black', 
       }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
          
        />
        {/* <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="map" size={size} color={color} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Share"
          component={ShareScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="share" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="info" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function SplashScreenComponent() {
  return (
    <SplashScreen />
  );
}

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

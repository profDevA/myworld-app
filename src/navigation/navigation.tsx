import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home.screen';
import Login from '../screens/Login/Login.screen';
import Register from '../screens/Register/Register.screen';
import Profile from '../screens/Profile/Profile.screen';
import MyPodcastMenu from '../screens/MyPodcastMenu/MyPodcastMenu.screen';
import PodcastScreen from '../screens/PodcastScreen/Podcast.screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}: any) => {
            return <Icon name={'ios-home'} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}: any) => {
            return <Icon name={'ios-settings'} size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeBase"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="MyPodcastMenuScreen"
          options={{headerShown: false}}
          component={MyPodcastMenu}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="RegisterScreen"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          name="PodcastScreen"
          options={{headerShown: false}}
          component={PodcastScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

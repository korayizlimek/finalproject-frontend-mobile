import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Box from '../components/box';
import Button from '../components/button';

import Login from '../components/login';
import Register from '../components/register';
import LoggedIn from '../components/loggedIn';

import theme from '../utils/theme';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function UserView({navigation}) {
  return (
    // <Box as={SafeAreaView}>
    //   <Box>{user ? <Login /> : <Register />}</Box>
    // </Box>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="LoggedIn" component={LoggedIn} />
    </Stack.Navigator>
  );
}

export default UserView;

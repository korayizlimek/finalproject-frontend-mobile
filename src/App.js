import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';

import UserView from './views/UserView';
import MenuView from './views/MenuView';
import CartView from './views/CartView';

import TabBar from './components/tabBar';
import Box from './components/box';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box as={SafeAreaView} flex={1}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Menu"
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="User" component={UserView} />
            <Tab.Screen name="Menu" component={MenuView} />
            <Tab.Screen name="Cart" component={CartView} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
};

export default App;

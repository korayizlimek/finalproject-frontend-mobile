import {View, Text} from 'react-native';
import React from 'react';

import Button from './button';

//icons
import Icon from 'react-native-vector-icons/Ionicons';

import Box from './box';

import theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Menu' ? (
          <Box key={label} mt={-15} p={15} bg="white" borderRadius="full">
            <Button size={56} bg="pink" onPress={onPress} borderRadius="full">
              <Icon name="fast-food-outline" size={30} color="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            height={56}
            flex={1}
            onPress={onPress}
            flexDirection="column"
            pt={6}>
            {label === 'Cart' && (
              <Icon
                name="cart-outline"
                size={30}
                color={theme.colors.textLight}
              />
            )}
            {label === 'User' && (
              <Icon
                name="person-outline"
                size={30}
                color={theme.colors.textLight}
              />
            )}

            <Box size={4} bg={isFocused ? 'pink' : 'white'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;

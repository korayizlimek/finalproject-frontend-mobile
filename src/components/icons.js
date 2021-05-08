import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import ActionButton from '../components/actionButton';
import Box from '../components/box';

import Picture from '../components/picture';

const icons = () => {
  return (
    <View>
      <Text>Koray</Text>
      <Picture
        uri={
          'https://cdn.yemek.com/mnresize/940/940/uploads/2019/01/ev-usulu-urfa-kebap-tarifi.jpg'
        }
      />
    </View>
  );
};

export default icons;

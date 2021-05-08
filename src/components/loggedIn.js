import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';

import Input from './textInput';
import Text from './text';
import Box from './box';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from './actionButton';

const LoggedIn = ({navigation}) => {
  // const [product, SetProduct] = useState([]);

  // useEffect(() => {
  //   fetch('http://192.168.1.103:5000/api/products')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  const [userDetail, setUserDetail] = useState();

  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2OGFlZTJmM2VkODAzZTQyOTkyMjAiLCJlbWFpbCI6Im9ybmVrZ2lyaXNAZ21haWwuY29tIiwiaWF0IjoxNjIwMzA1MzYyLCJleHAiOjE2MjAzMDg5NjJ9.oq7KklL0pweuP-tPGJIZ0RjzFnCQ0UZWfWGLLkXRfLc';

  const SignIn = () => {
    console.log('basladi');
    fetch('http://192.168.1.101:5000/api/users/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + TOKEN,
      },
    })
      .then(response => response.json())
      .then(jsonRes => {
        // setUserDetail(jsonRes);
        console.log('basarili');
        console.log(jsonRes);
      })
      .catch(error => {
        console.error(error);
        console.log('basarisiz');
      });
  };

  return (
    <Box
      as={SafeAreaView}
      height="100%"
      //   p={100}
      bg="light"
      justifyContent="center">
      <ActionButton mt={50} ml={20} mr={20}>
        <ActionButtonTitle onPress={SignIn}>Getir</ActionButtonTitle>
      </ActionButton>

      <ActionButton mt={5} ml={20} mr={20}>
        <ActionButtonTitle onPress={() => navigation.navigate('Register')}>
          Çıkış Yap
        </ActionButtonTitle>
      </ActionButton>
    </Box>
  );
};

export default LoggedIn;

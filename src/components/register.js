import React from 'react';
import {View, SafeAreaView} from 'react-native';

import Input from '../components/textInput';
import Text from '../components/text';
import Box from './box';
import BoxCenter from './boxCenter';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from './actionButton';

const Register = ({navigation}) => {
  const [isFocus, setFocus] = React.useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    surname: '',
    name: '',
    username: '',
  });

  const onInputChange = (name, value) => {
    setUser({...user, [name]: value});
  };

  // const textInputChange = val => {
  //   if (val.length !== 0) {
  //     setUser({
  //       ...user,
  //       email: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setUser({
  //       ...user,
  //       email: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };

  const signUp = () => {
    fetch('http://192.168.1.101:5000/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        surname: user.surname,
        userName: user.username,
        email: user.email,
        password: user.password,
      }),
    })
      .then(navigation.navigate('Login'))
      .catch(error => console.log(error));
  };

  return (
    <Box
      as={SafeAreaView}
      height="100%"
      //   p={100}
      bg="light"
      justifyContent="center">
      {/* Name */}
      <Box mt={10} ml={20} mr={20}>
        <Text color="black">Name:</Text>
        <Input
          bg="pink"
          height={52}
          pl={52}
          color="black"
          placeholder="Your Name"
          placeholderTextColor="white"
          autoCapitalize="none"
          borderRadius="normal"
          onFocus={onFocus}
          onChangeText={val => onInputChange('name', val)}
        />
      </Box>

      {/* Username */}
      <Box mt={10} ml={20} mr={20}>
        <Text color="black">Username:</Text>
        <Input
          bg="pink"
          height={52}
          pl={52}
          color="black"
          placeholder="Your Username"
          placeholderTextColor="white"
          autoCapitalize="none"
          borderRadius="normal"
          onFocus={onFocus}
          onChangeText={val => onInputChange('username', val)}
        />
      </Box>

      {/* SurName */}
      <Box mt={10} ml={20} mr={20}>
        <Text color="black">Surname:</Text>
        <Input
          bg="pink"
          height={52}
          pl={52}
          color="black"
          placeholder="Your Surname"
          placeholderTextColor="white"
          autoCapitalize="none"
          borderRadius="normal"
          onFocus={onFocus}
          onChangeText={val => onInputChange('surname', val)}
        />
      </Box>

      {/* Email Giris */}
      <Box position="relative" mt={10} ml={20} mr={20}>
        <Text color="black">Email:</Text>
        <Box position="absolute" zIndex={1} left={15} top={15}></Box>
        <Input
          bg="pink"
          height={52}
          pl={52}
          color="black"
          placeholder="Your Email"
          placeholderTextColor="white"
          autoCapitalize="none"
          borderRadius="normal"
          onFocus={onFocus}
          onChangeText={val => onInputChange('email', val)}
        />
      </Box>

      {/* Sifre Giris */}
      <Box mt={10} ml={20} mr={20}>
        <Text color="black">Password:</Text>
        <Input
          secureTextEntry={true}
          bg="pink"
          height={52}
          pl={52}
          color="black"
          placeholder="Your Password"
          placeholderTextColor="white"
          autoCapitalize="none"
          borderRadius="normal"
          onFocus={onFocus}
          onChangeText={val => onInputChange('password', val)}
        />
      </Box>

      {/* Giris Yap */}
      <ActionButton mt={50} ml={20} mr={20}>
        <ActionButtonTitle onPress={signUp}>Kayit Ol</ActionButtonTitle>
      </ActionButton>
      <Box alignItems="center" justifyContent="center" mt={5}>
        <Text color="gray">Hesabin Var Mi? Giris Yap</Text>
      </Box>

      <ActionButton mt={5} ml={20} mr={20}>
        <ActionButtonTitle onPress={() => navigation.navigate('Login')}>
          Giris Yap
        </ActionButtonTitle>
      </ActionButton>
    </Box>
  );
};

export default Register;

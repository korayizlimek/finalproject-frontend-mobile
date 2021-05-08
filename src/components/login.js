import React from 'react';
import {View, SafeAreaView} from 'react-native';

import Input from '../components/textInput';
import Text from '../components/text';
import Box from './box';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from './actionButton';

const Login = ({navigation}) => {
  const [isFocus, setFocus] = React.useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  // const [product, SetProduct] = useState([]);

  // useEffect(() => {
  //   fetch('192.168.1.101:5000/api/products')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setUser({
        ...user,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setUser({
        ...user,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const SignIn = () => {
    fetch('http://192.168.1.101:5000/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'ornekgiris@gmail.com',
        secondParam: '123456',
      }),
    })
      .then(navigation.navigate('LoggedIn'))
      .catch(error => console.log(error));
  };

  return (
    <Box
      as={SafeAreaView}
      height="100%"
      //   p={100}
      bg="light"
      justifyContent="center">
      {/* Email Giris */}
      <Box position="relative">
        <Box position="absolute" zIndex={1} left={15} top={15}>
          <Icon
            name="person-outline"
            size={20}
            color={theme.colors.textLight}
          />
        </Box>
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
          onChangeText={val => textInputChange(val)}
        />

        {user.check_textInputChange && (
          <Box position="absolute" right={0} top={9}>
            <Icon name="checkmark-circle-outline" size={30} color="green" />
          </Box>
        )}
      </Box>
      {/* Sifre Giris */}
      <Box mt={20}>
        <Box position="absolute" zIndex={1} left={15} top={15}>
          <Icon name="lock-closed-outline" size={20} color="gray" />
        </Box>
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
        />
        <Box position="absolute" right={10} top={20}>
          <Icon name="eye-off-outline" size={20} color={'gray'} />
        </Box>
      </Box>
      {/* Giris Yap */}
      <ActionButton mt={50} ml={20} mr={20}>
        <ActionButtonTitle onPress={SignIn}>Giris Yap</ActionButtonTitle>
      </ActionButton>
      <Box alignItems="center" justifyContent="center" mt={5}>
        <Text color="gray">Hesabin Yok mu? Kayit Ol</Text>
      </Box>

      <ActionButton mt={5} ml={20} mr={20}>
        <ActionButtonTitle onPress={() => navigation.navigate('Register')}>
          Kaydol
        </ActionButtonTitle>
      </ActionButton>
    </Box>
  );
};

export default Login;

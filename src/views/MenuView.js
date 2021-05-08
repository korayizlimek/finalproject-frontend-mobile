import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SafeAreaView from 'react-native-safe-area-view';
const HomeStack = createStackNavigator();

import DetailView from './DetailView';
import Box from '../components/box';
import Button from '../components/button';
import {
  CardTitle,
  CardSummary,
  CardContainer,
  CardImage,
} from '../components/card';

import theme from '../utils/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Fontisto';

function Menu(props) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Menu"
        component={MenuView}
        options={() => {
          return {
            header: () => {},
          };
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({route, navigation}) => {
          return {
            title: (route.params && route.params.title) || 'Detay',
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'transparent',
            },
            id: route.params && route.params.id,
            cart: () => {
              setCartItems();
            },

            headerLeft: () => (
              <Button
                height="100%"
                px={20}
                onPress={() => navigation.navigate('Menu')}>
                <Icon name="angle-left" size={30} color="blue" />
              </Button>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

//! MenuView component

import Picture from '../components/picture';
import ActionButton, {ActionButtonTitle} from '../components/actionButton';

function MenuView({navigation, route}) {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.101:5000/api/products')
      .then(response => response.json())
      .then(jsonRes => {
        setProduct(jsonRes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (route.params) {
      const id = route.params.cartToCart.id;
      const qty = route.params.cartToCart.qty;
      const uri = route.params.cartToCart.uri;
      const price = route.params.cartToCart.price;
      const name = route.params.cartToCart.name;
      const existItem = cartItems.find(x => x.id === id);
      if (existItem) {
        cartItems.find(x => (x.id === id ? (x.qty = qty) : x));
      } else {
        setCartItems([...cartItems, {id, qty, name, uri, price}]);
      }
      // setCartItems([...cartItems, {id, qty, uri, price}]);
      console.log(cartItems);
    }
  }, [route.params?.cartToCart]);

  const updateCart = () => {
    navigation.navigate('Cart', {cartToCart: cartItems});
  };

  return (
    <Box as={SafeAreaView}>
      <Box p={10}>
        <FlatList
          data={product}
          renderItem={({item}) => (
            <Box py={5}>
              <CardContainer
                flex={1}
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: item.name,
                    id: item._id,
                  })
                }>
                <Box flexDirection="row">
                  <Picture uri={item.imageUrl} />
                  <Box ml={10}>
                    <CardTitle>{item.name}</CardTitle>
                    <CardSummary>Fiyat: {item.price} TL</CardSummary>
                    <CardSummary>{item.aciklama}</CardSummary>
                  </Box>
                </Box>
              </CardContainer>
            </Box>
          )}
          keyExtractor={item => item._id}
          // ListHeaderComponent={<Text>Yiyecekler</Text>}
        />
      </Box>

      <ActionButton m={20} onPress={() => updateCart()}>
        <Icon name="turkish-lira" color="gray" size={30} />
        <ActionButtonTitle>Sepeti Guncelle</ActionButtonTitle>
      </ActionButton>
    </Box>
  );
}

export default Menu;

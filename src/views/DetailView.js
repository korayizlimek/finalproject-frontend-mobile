import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet, Image} from 'react-native';
import ActionButton, {ActionButtonTitle} from '../components/actionButton';
import Box from '../components/box';

import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Fontisto';

import theme from '../utils/theme';

import Text from '../components/text';

const DetailView = ({navigation, route}) => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState({});

  // const addToCartHandler = (id, qty) => {
  //   const existItem = cart.find(x => x.id === id);
  //   // console.log(existItem);
  //   if (existItem) {
  //     cart.find(x => (x.id === id ? (x.qty = qty) : x));
  //   } else {
  //     setCart([...cart, {id, qty}]);
  //   }
  //   navigation.navigate('Menu');
  //   // console.log('basarili');
  //   // console.log(qty);
  //   console.log(cart);
  //   // navigation.navigate('Cart', {cartViews: cart});
  //   //navigation.navigate('Cart', {cartToCart: cart});
  // };
  const addToCartHandler = (id, qty, name, uri, price) => {
    // console.log(id);
    setCart({id, qty, name, uri, price});
    console.log(cart);
    if (cart.id) {
      navigation.navigate({
        name: 'Menu',
        params: {cartToCart: cart},
        merge: true,
      });
    }
  };

  useEffect(() => {
    console.log(route);
    fetch(`http://192.168.1.101:5000/api/products/${route.params.id}`)
      .then(response => response.json())
      .then(jsonRes => {
        setProduct(jsonRes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const countMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const countPlus = () => {
    setCount(count + 1);
  };

  return (
    <Box as={SafeAreaView} flex={1} alignItems="center" justifyContent="center">
      <Image style={styles.image} source={{uri: product.imageUrl}} />
      <Text>{product.name}</Text>
      <Text>kalan: {product.countInStock}</Text>
      <Text>Aciklama: {product.description}</Text>
      <Text>Fiyat: {product.price}</Text>

      <Text mt={30}>ADET</Text>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <ActionButton onPress={countMinus}>
          <Icons name="remove" size={30} color={theme.colors.textLight} />
        </ActionButton>
        <Box
          bg="pink"
          borderRadius={999}
          height={40}
          width={40}
          alignItems="center"
          justifyContent="center"
          ml={10}
          mr={10}>
          <Text>{count}</Text>
        </Box>
        <ActionButton onPress={countPlus}>
          <Icons color={theme.colors.textLight} name="add" size={30} />
        </ActionButton>
      </Box>
      <ActionButton
        mt={15}
        onPress={() =>
          addToCartHandler(
            product._id,
            count,
            product.name,
            product.imageUrl,
            product.price,
          )
        }>
        <Icon
          name="shopping-basket-add"
          color={theme.colors.textLight}
          size={30}
        />
        <ActionButtonTitle>Sepete Ekle</ActionButtonTitle>
      </ActionButton>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});

export default DetailView;

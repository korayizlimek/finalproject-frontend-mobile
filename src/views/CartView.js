// import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Box from '../components/box';
import Button from '../components/button';
import {
  CardTitle,
  CardSummary,
  CardContainer,
  CardImage,
} from '../components/card';
import Picture from '../components/picture';

import ActionButton, {ActionButtonTitle} from '../components/actionButton';

import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '../components/text';

const renderItem = ({item}) => (
  <Box py={5}>
    <CardContainer
      flex={1}
      onPress={() =>
        navigation.navigate('Detail', {
          title: item.name,
          id: item.id,
        })
      }>
      <Box flexDirection="row">
        <Picture uri={item.uri} />
        <Box ml={10}>
          <CardTitle>{item.name}</CardTitle>
          <CardSummary>Fiyat: {item.price} TL</CardSummary>
          <CardSummary>Adet: {item.qty}</CardSummary>
        </Box>
      </Box>
    </CardContainer>
  </Box>
);

export default function CartView({navigation, route}) {
  const [cartItem, setCartItem] = useState([
    // {
    //   id: '23124214',
    //   uri:
    //     'https://i12.haber7.net//haber/haber7/photos/2019/27/firinda_tavuk_sis_nasil_yapilir_1561966879_9606',
    //   qty: '23',
    //   name: 'koray',
    // },
    // {
    //   id: '3213213123',
    //   uri:
    //     'https://i12.haber7.net//haber/haber7/photos/2019/27/firinda_tavuk_sis_nasil_yapilir_1561966879_9606',
    //   qty: '23',
    //   name: 'koray',
    // },
  ]);

  const [isRender, setIsRender] = useState(false);
  const [paid, setPaid] = useState(false);

  const done = () => {
    cartEmpty();
    setPaid(current => !current);
  };

  const cartEmpty = () => {
    setCartItem([]);
    console.log(cartItem);
  };

  useEffect(() => {
    console.log('yenilendi');
    cartEmpty();
    console.log(route.params.cartToCart);
    setCartItem(route.params.cartToCart);
  }, [route.params]);

  return (
    <Box as={SafeAreaView}>
      {paid ? (
        <View>
          <Text mt={300} textAlign="center" justifyContent="center">
            Ödeme tamamlandı Sparişiniz Hazırlanıyor...
          </Text>
          <ActionButton m={15} onPress={() => done()}>
            <Icon name="turkish-lira" color="gray" size={30} />
            <ActionButtonTitle>Yeni Sprariş Ver</ActionButtonTitle>
          </ActionButton>
        </View>
      ) : (
        <Box p={10}>
          <FlatList
            data={cartItem}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // ListHeaderComponent={<Text>Yiyecekler</Text>}
            extraData={isRender}
          />
          {/* <View>
            <Text>{cartItem}</Text>
          </View> */}
          <ActionButton mt={15} onPress={() => done()}>
            <Icon name="turkish-lira" color="gray" size={30} />
            <ActionButtonTitle>Ödemeyi Tamamla</ActionButtonTitle>
          </ActionButton>
        </Box>
      )}
    </Box>
  );
}

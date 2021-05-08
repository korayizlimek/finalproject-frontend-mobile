import React from 'react';
import {Image} from 'react-native';
import styles from './pictureStyles';

const Picture = ({uri}) => <Image style={styles.image} source={{uri}} />;

Picture.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80',
  width: '80',
};

export default Picture;

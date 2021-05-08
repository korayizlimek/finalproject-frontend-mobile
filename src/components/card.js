import React from 'react';

import Box from './box';
import Text from './text';
import Button from './button';
// import Image from './image';

export function CardBody({children}) {
  return {children};
}

export function CardTitle({children}) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  );
}

export function CardSummary({children}) {
  return (
    <Text fontSize={14} color="textMedium" mt={8}>
      {children}
    </Text>
  );
}

// import styles from './pictureStyles';
// import {Image} from 'react-native';
// export function CardImage({children}) {
//   return <Image style={styles.image} source={{children}} />;
// }

export function CardContainer({children, ...props}) {
  return (
    <Button bg="white" borderRadius="normal" py={16} px={12} {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  );
}

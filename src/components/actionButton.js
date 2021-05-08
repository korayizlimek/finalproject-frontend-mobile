import React from 'react';

import Button from './button';
import Text from '../components/text';

function ActionButton({children, ...props}) {
  return (
    <Button
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 4.49,
        elevation: 18,
      }}
      minWidth="actionButton"
      height="actionButton"
      borderRadius="full"
      px={8}
      bg="white"
      {...props}>
      {children}
    </Button>
  );
}

export function ActionButtonTitle({children, ...props}) {
  return (
    <Text mr={8} ml={8} fontWeight="bold" color="textLight" {...props}>
      {children}
    </Text>
  );
}

export default ActionButton;

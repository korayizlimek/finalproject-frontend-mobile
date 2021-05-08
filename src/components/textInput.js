import {TextInput as T} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  typography,
  flexbox,
  borderRadius,
} from 'styled-system';

const Input = styled(T)(
  compose(color, size, space, flexbox, typography, borderRadius),
);

export default Input;

import {View} from 'react-native';
import styled from 'styled-components';

import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius,
} from 'styled-system';

const Image = styled(View)(compose(color, size, space, flexbox, borderRadius));

export default Image;

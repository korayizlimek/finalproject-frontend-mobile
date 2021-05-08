import { Text as T } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space, typography, flexbox } from 'styled-system'

const Text = styled(T)(compose(color, size, space, flexbox, typography))

export default Text

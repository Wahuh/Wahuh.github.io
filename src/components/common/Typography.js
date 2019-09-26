import React from 'react'
import { Text } from 'rebass'

const Typography = props => {
  const { fontSize, letterSpacing, as, ...rest } = props
  return (
    <Text
      {...rest}
      as={as || 'p'}
      fontSize={fontSize}
      letterSpacing={letterSpacing || fontSize}
      lineHeight={fontSize}
    />
  )
}

export default Typography

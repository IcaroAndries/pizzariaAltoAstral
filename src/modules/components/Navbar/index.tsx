import {
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

import React from 'react';

const Navbard: React.FC = function ({ }) {
  return (
    <HStack
      h="6em"
      w="100%"
      px='15em'
      justifyContent="space-between"
      alignItems="center"
      bgColor="dayRed"
    >
      <Image src={'public/logo.png'} alt='logo de pizzaria' />

      <HStack>
        <Text>
          teste
        </Text>
      </HStack>
    </HStack>
  )
}

export default Navbard;
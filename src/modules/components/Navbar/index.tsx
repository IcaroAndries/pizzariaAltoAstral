import {
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

import React from 'react';

import image from 'images/logo.png';

const Navbard: React.FC = function ({ }) {

  console.log(image)

  return (
    <HStack
      h="6em"
      w="100%"
      px='15em'
      justifyContent="space-between"
      alignItems="center"
      bgColor="dayRed"
    >
      <Image src={'images/logo.png'} alt='logo de pizzaria' />

      <HStack
        fontSize="1.5em"
        fontWeight='600'
        textColor="#FFFFFF"
        spacing='3em'
      >
        <Text>Home</Text>
        <Text>Order your pizza!</Text>
      </HStack>
    </HStack>
  )
}

export default Navbard;
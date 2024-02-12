import { Stack } from '@chakra-ui/react';
import React from 'react';

import Navbar from '~/modules/components/Navbar';
import Hero from '~/modules/components/Hero';
import Footer from '~/modules/components/Footer';

const Home: React.FC = function ({ }) {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Footer />
    </Stack>
  );
};

export default Home;

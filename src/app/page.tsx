import { Stack } from "@chakra-ui/react";
import React from "react";

import Hero from "~/modules/components/Hero";
import Footer from "~/modules/components/Footer";
import About from "~/modules/components/About";

const Home: React.FC = function ({}) {
  return (
    <Stack spacing="0px" h="100%">
      <Hero />
      <About />
      <Footer />
    </Stack>
  );
};

export default Home;

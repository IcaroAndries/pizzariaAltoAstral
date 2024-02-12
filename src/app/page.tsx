import { Stack } from "@chakra-ui/react";
import React from "react";

import Navbar from "~/modules/components/Navbar";
import Hero from "~/modules/components/Hero";

const Home: React.FC = function ({ }) {
  return (
    <Stack>
      <Navbar />
      <Hero />
    </Stack>
  )
}

export default Home
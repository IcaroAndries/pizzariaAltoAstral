import { Stack } from '@chakra-ui/react';
import Provider from '~/modules/providers/chakraProvider';
import React from 'react';

const RootLayout: React.FC = function ({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>Pizzaria Alto Astral</title>
      </head>

      <body>
        <Provider>
          <Stack minH="100vh" minW={'100vw'} direction="column" spacing={0}>
            {children}
          </Stack>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

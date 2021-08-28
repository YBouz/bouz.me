import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/styles/theme';
import Layout from '@/components/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default App;

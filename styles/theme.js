import { extendTheme } from '@chakra-ui/react';
// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
});

export default theme;

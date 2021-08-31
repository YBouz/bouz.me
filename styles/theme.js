import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  cssVarPrefix: 'yb'
};

const colors = {
  primary: '#2B6CB0',
  secondaryBg: '#080808'
};

const Link = {
  baseStyle: {
    _hover: { color: '#2B6CB0', textDecoration: 'none' }
  }
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      'html, body': {
        bg: mode('gray.50', 'black')(props)
      },
      '#__next': {
        display: 'flex',
        flexDir: 'column',
        minHeight: '100vh'
      },
      '::-webkit-scrollbar': {
        width: '8px',
        bg: '#080808'
      },
      '::-webkit-scrollbar-thumb': {
        bg: '#111111'
      }
    })
  },
  components: {
    Link
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  },
  colors,
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
});

export default theme;

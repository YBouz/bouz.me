import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={'Toggle Color Mode'}
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      background='none'
      isRound
    />
  );
};

export default ColorModeSwitch;

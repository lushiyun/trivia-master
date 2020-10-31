import { useColorMode, IconButton } from '@chakra-ui/core';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      aria-label={`Switch to ${isDark ? 'light' : 'light'} mode`}
      variant="ghost"
      color="current"
      ml="2"
      fontSize="20px"
      onClick={toggleColorMode}
      icon={isDark ? 'sun' : 'moon'}
    />
  );
};

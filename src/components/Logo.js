import { useColorMode, Heading, Stack } from '@chakra-ui/core';
import Link from 'next/link';

const Logo = () => {
  const { colorMode } = useColorMode();
  const fillColor = colorMode === 'light' ? '#2D3748' : '#F7FAFC';
  const fillPurple = colorMode === 'light' ? '#6b46c1' : '#D6BCFA';

  return (
    <Link href="/">
      <Stack isInline align="center" spacing={0}>
        <Heading as="h3" size="lg" color={fillColor}>
          Trivia
        </Heading>
        <Heading as="h3" size="lg" color={fillPurple}>
          Champion.
        </Heading>
      </Stack>
    </Link>
  );
};

export default Logo;

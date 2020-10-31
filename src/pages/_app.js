import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Provider } from 'next-auth/client';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <CSSReset />
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;

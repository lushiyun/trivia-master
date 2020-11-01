import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Provider } from 'next-auth/client';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="dark">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

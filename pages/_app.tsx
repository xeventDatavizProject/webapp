import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'store';
import '../styles/_styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

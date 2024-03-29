import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'store';
import { setAuthLogged } from 'store/auth/reducer';
import '../styles/_styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const token = localStorage.getItem('token');

    Store.dispatch(setAuthLogged(Boolean(token)));
  }, []);

  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

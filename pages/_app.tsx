import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Sidebar from '../components/sidebar';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div style={{ display: 'flex', maxWidth: 1100 }}>
      <div style={{ flexBasis: '40%', margin: 25, backgroundColor: 'gray' }}>
        <Sidebar />
      </div>
      <div style={{ flexBasis: '60%', margin: 25 }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;

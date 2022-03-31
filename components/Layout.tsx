import Head from 'next/head';
import type { FC } from 'react';
import React from 'react';

const Layout: FC = ({ children }): JSX.Element => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>My App</title>
    </Head>
    {children}
  </>
);

export default Layout;

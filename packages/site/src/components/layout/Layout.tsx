import React from 'react';

import Header from '@components/common/Header';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />

    <main id="content">{children}</main>
  </>
);

export default Layout;

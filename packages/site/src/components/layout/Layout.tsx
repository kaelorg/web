import React from 'react';

import Footer from '@components/common/Footer';
import Header from '@components/common/Header';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />

    <main id="content">{children}</main>

    <Footer />
  </>
);

export default Layout;

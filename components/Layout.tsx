import { Header } from '.';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gray-100">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

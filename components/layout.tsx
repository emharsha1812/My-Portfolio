import React, { ReactNode } from "react";

import Header from "./header";
// import LeetCodeStats from "./LeetCodeStats";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased  text-white">
      <Header />
      <main className="mb-auto">{children}</main>
      {/* <Footer /> */}
      {/* <LeetCodeStats /> */}
    </div>
  );
};

export default Layout;

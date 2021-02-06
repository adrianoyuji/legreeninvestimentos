import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "components/ui/Header";
import Footer from "components/ui/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Le Green Investimentos" }: Props) => (
  <div className="flex flex-col bg-black h-screen w-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main className="flex flex-col w-screen h-full">{children}</main>
    <Footer />
  </div>
);

export default Layout;

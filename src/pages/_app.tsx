
import type { AppProps } from "next/app";
import Head from "next/head";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Head>
        <title>URBAN CART | Online Shopping</title>
        <meta
          name="description"
          content="Shop your favourite products at URBAN CART."
        />
      </Head>

      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}

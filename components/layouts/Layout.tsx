import React, { FC } from "react";
import Head from "next/head";
import { type } from "os";

import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Ivan Lucana" />
        <meta name="description" content="Informacion sobre pokemon" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

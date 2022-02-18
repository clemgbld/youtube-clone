import React from "react";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "regenerator-runtime/runtime";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AuthProvider } from "../store/auth";
import { BigNavProvider } from "../store/nav";
import { ExplorerProvider } from "../store/explorer";
import { TagsProvider } from "../store/tags";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <BigNavProvider>
        <ExplorerProvider>
          <TagsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TagsProvider>
        </ExplorerProvider>
      </BigNavProvider>
    </AuthProvider>
  );
}

export default MyApp;

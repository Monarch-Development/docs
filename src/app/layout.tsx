import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Project Monarch',
  icons: {
    icon: '/img/logo.ico',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Head> 
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1b196864efd84fe78a1641e4b276faa0"}'></script>
      </Head>
      <body>
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

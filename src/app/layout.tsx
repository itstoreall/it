import type { Metadata } from 'next';
import { Inter, Share_Tech, Share_Tech_Mono } from 'next/font/google';
import { ChildrenProps } from '@/types';
import '../styles/globals.scss';

const shareTech = Share_Tech({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share-tech'
});

export const metadata: Metadata = { title: 'IT', description: 'itstoreall UA' };

const RootLayout = ({ children }: Readonly<ChildrenProps>) => (
  <html lang='en'>
    <body className={`${shareTech.variable}`}>{children}</body>
  </html>
);

export default RootLayout;

// app/layout.js
import '../styles/App.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Highlighting Staten Island',
  description: '',
  icons: {
    icon: '/favicon.png', // or .png / .svg
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

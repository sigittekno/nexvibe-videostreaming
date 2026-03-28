import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'NexVibe | AI Video Intelligence',
  description: 'The future of video streaming and interactive learning.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="bg-background text-text-primary min-h-screen selection:bg-accent-purple/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

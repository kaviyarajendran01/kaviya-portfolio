import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaviya R | Computer Science Graduate',
  description:
    'Portfolio of Kaviya R — Computer Science Engineering graduate specializing in UI/UX, frontend development, and software development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
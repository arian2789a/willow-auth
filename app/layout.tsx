import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Willow | Room to grow', description: 'A calm, light authentication interface with olive accents and original botanical artwork.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body>{children}</body></html>;
}

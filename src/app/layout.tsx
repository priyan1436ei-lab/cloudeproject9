import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'CloudMemory AI',
  description: 'Turn Your Documents Into Knowledge.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#0f172a_0%,#020817_42%,#020617_100%)]">
          <SiteHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smash Bros Ult Combos",
  description: "a log of smash ult combos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Link href="/">
      <div className='bg-slate-400 p-1 text-center'>Samsh combos</div>
      </Link>
        {children}
        </body>
    </html>
  );
}

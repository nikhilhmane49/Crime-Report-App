import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Crime Analysis and report ",
  description: "Crime Analysis and report ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20 ">
   
          {/* gradient bg */}
          <div className=" fixed inset-0 -z-10 min-h-screen ">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500" />

          </div>
          {/* navbar */}
          <Navbar />
          <div className="flex flex-col items-center justify-center min-h-screen">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              {children}
            </main>
        
          </div>
          </div>
      </body>
   </html>
  );
}
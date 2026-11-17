import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedLogo from "./components/AnimatedLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "💻 Austin Moorer - Dev 💻",
  description: "Portfio site for Austin Moorer, a software engineer and web developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grid-canvas">
          <div className="grid-rotator"></div>
        </div>
            <div className="flex flex-col flex-1 items-center justify-center bg-transparent">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start position-relative z-1">
                <header className="flex flex-col items-center justify-between w-full sm:flex-row">
                  <AnimatedLogo />
                  <div className="flex flex-row text-lg font-semibold text-zinc-800 dark:text-zinc-200">

                    <a href="#about"><h3 className="hover:underline hover:bg-gray-200 dark:hover:bg-gray-800 rounded py-1 px-2">About</h3></a>
                    <a href="#projects"><h3 className="hover:underline hover:bg-gray-200 dark:hover:bg-gray-800 rounded py-1 px-2">Projects</h3></a>
                    <a href="#contact"><h3 className="hover:underline hover:bg-gray-200 dark:hover:bg-gray-800 rounded py-1 px-2">Contact</h3></a>
                    <a href="#resume"><h3 className="hover:underline hover:bg-gray-200 dark:hover:bg-gray-800 rounded py-1 px-2">Resume</h3></a>
                  </div>
        
                </header>
                {children}
              </main>
            </div>
        </body>
    </html>
  );
}

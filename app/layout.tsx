import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";


// Google font
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800']
});


export const metadata: Metadata = {
  title: "Rest Countries API",
  description: "App to have information about all countries in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunitoSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grey-50 text-grey-950 dark:bg-blue-950">
        <ThemeProvider>
          <Header  />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

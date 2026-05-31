import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import "./globals.css";

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
      className={`${nunitoSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grey-50 text-grey-950">
        {children}
      </body>
    </html>
  );
}

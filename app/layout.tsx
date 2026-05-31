import type { Metadata } from "next";
import "./globals.css";


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
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

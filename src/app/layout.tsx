import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plantit",
  description: "눈으로 보는 일기장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

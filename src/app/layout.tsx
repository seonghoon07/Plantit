"use client"

import "./globals.css";

import {useAuthService} from "@/utils/auth/useAuthService";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuthService();
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

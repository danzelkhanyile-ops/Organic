import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Organic Chemistry with Dr Khanyile",
  description: "Master DBE past papers with Dr Khanyile's step-by-step method",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}

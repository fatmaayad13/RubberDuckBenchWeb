import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RubberDuckBench",
  description: "The next big LLM benchmark!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

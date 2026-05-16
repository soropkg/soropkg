import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "soropkg — Package Manager for Soroban Smart Contracts",
  description:
    "Discover, install, and publish smart contract packages on Stellar. Inspect live on-chain interfaces, manage dependencies, and generate typed TypeScript clients.",
  keywords: ["Soroban", "Stellar", "smart contracts", "package manager", "blockchain"],
  openGraph: {
    title: "soropkg — Package Manager for Soroban",
    description: "npm for Soroban smart contracts on Stellar.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=Inconsolata:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

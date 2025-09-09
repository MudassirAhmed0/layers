import type { Metadata } from "next";
import "./globals.css"; 
import NavBar from "@/components/nav";

 

export const metadata: Metadata = {
  title: "UseLayers — Redesign (WIP)",
  description: "Smooth like butter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        <NavBar/> 
          {children} 
      </body>
    </html>
  );
}

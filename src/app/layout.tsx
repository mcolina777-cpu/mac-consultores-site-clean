import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mac Consultores Jurídicos & Asociados | Excelencia Legal",
  description: "Firma boutique en Caracas especializada en litigio penal de alta complejidad, derecho constitucional y compliance corporativo preventivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/Logo/mac-icon-192.png" />
        <link rel="apple-touch-icon" href="/Logo/apple-touch-icon.png" />
      </head>
      <body className="page-firma">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

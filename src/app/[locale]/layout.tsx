import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const cormorantGaramond = localFont({
  src: [
    { path: "../../../public/fonts/Cormorant-400.ttf", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Cormorant-500.ttf", weight: "500", style: "normal" },
    { path: "../../../public/fonts/Cormorant-600.ttf", weight: "600", style: "normal" },
    { path: "../../../public/fonts/Cormorant-700.ttf", weight: "700", style: "normal" }
  ],
  variable: "--font-cormorant",
});

const inter = localFont({
  src: [
    { path: "../../../public/fonts/Inter-300.ttf", weight: "300", style: "normal" },
    { path: "../../../public/fonts/Inter-400.ttf", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Inter-500.ttf", weight: "500", style: "normal" },
    { path: "../../../public/fonts/Inter-600.ttf", weight: "600", style: "normal" }
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mac-consultores-site-clean.vercel.app'),
  title: "Mac Consultores Jurídicos & Asociados | Excelencia Legal",
  description: "Firma boutique en Caracas especializada en litigio penal de alta complejidad, derecho constitucional y compliance corporativo preventivo.",
};

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/mac/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/mac/mac-icon-192.png" />
        <link rel="apple-touch-icon" href="/assets/mac/apple-touch-icon.png" />
      </head>
      <body className="page-firma">
        <Navbar dict={dict.nav} locale={locale} />
        {children}
        <Footer dict={dict} locale={locale} />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}

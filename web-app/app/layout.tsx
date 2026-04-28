import type { Metadata } from "next";
import { Archivo, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taufic Gashaan · Exclusive Design",
  description: "Despacho de arquitectura premium en Guadalajara. Especialistas en arquitectura de contenedores y diseño residencial de alto nivel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${dmSerifDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}

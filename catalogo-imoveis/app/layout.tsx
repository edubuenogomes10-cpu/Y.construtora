import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Y. Construtora | Pelotas e Região",
  description: "Especialistas em aquisição de terreno e construção em Pelotas e região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

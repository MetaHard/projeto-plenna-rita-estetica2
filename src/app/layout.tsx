import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plenna-estetica.vercel.app"),
  title: "Plenna Estética e Emagrecimento | Resultados Reais",
  description:
    "Especialista em lipedema pós-operatório, gordura localizada, seca barriga e diástase em Divinópolis - MG. Agende sua avaliação gratuita!",
  keywords: [
    "lipedema",
    "estética corporal",
    "seca barriga",
    "gordura localizada",
    "diástase",
    "emagrecimento",
    "Divinópolis",
    "Plenna Estética",
  ],
  openGraph: {
    title: "Plenna Estética e Emagrecimento",
    description: "Resultados reais. Autoestima de volta. Tratamentos avançados em Divinópolis - MG.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-plenna-pink selection:text-white bg-plenna-soft">
        {children}
      </body>
    </html>
  );
}

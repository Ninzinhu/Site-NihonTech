// Removendo imports desnecessários para manter apenas o essencial
import "../styles/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Konpeki Systems - Automação Inteligente e Soluções em IA",
  description:
    "Konpeki Systems é especializada em soluções de automação inteligente, bots e inteligência artificial. Transforme seu negócio com tecnologia de ponta.",
  keywords:
    "automação, bots, inteligência artificial, IA, machine learning, desenvolvimento, tecnologia, inovação, automação de processos, chatbots",
  robots: "index, follow",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    title: "Konpeki Systems - Automação Inteligente e Soluções em IA",
    description:
      "Konpeki Systems é especializada em soluções de automação inteligente, bots e inteligência artificial.",
    url: "https://konpeki.systems/",
    siteName: "Konpeki Systems",
    images: [
      {
        url: "https://nihontech-site.vercel.app/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "NihonTech - Tecnologia, Inovação e Cultura Japonesa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NihonTech - Tecnologia, Inovação e Cultura Japonesa",
    description:
      "NihonTech é um espaço dedicado à tecnologia, projetos inovadores e cultura japonesa.",
    images: ["https://nihontech-site.vercel.app/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0b0b0b" />
      </head>
      <body>
        <Providers>
          <main
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              zIndex: 1,
            }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

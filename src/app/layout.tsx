import "../../assets/bootstrap.min.css";
import "../../assets/icons2.css";
import "../../assets/mobirise2.css";
import "../styles/globals.css";

export const metadata = {
  title: "NihonTech - Tecnologia, Inovação e Cultura Japonesa",
  description:
    "NihonTech é um espaço dedicado à tecnologia, projetos inovadores e cultura japonesa. Conheça nossos serviços, portfólio e diferenciais.",
  keywords:
    "tecnologia, inovação, cultura japonesa, desenvolvimento web, projetos, portfólio, SaaS, mobile",
  robots: "index, follow",
  openGraph: {
    title: "NihonTech - Tecnologia, Inovação e Cultura Japonesa",
    description:
      "NihonTech é um espaço dedicado à tecnologia, projetos inovadores e cultura japonesa.",
    url: "https://nihontech-site.vercel.app/",
    siteName: "NihonTech",
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
        {/* Removidos os <link rel="stylesheet">, CSS agora importado via import */}
      </head>
      <body>{children}</body>
    </html>
  );
}

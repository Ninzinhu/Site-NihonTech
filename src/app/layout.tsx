import "../../assets/bootstrap.min.css";
import "../../assets/icons2.css";
import "../../assets/mobirise2.css";
import "../styles/globals.css";

export const metadata = {
  title: "NihonTech",
  description:
    "NihonTech é um espaço dedicado à tecnologia, projetos inovadores e cultura japonesa.",
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

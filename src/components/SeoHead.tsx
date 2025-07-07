import Head from "next/head";

export default function SeoHead() {
  return (
    <Head>
      <title>NihonTech - Inovação Japonesa em Tecnologia</title>
      <meta
        name="description"
        content="Descubra as inovações tecnológicas do Japão que transformam vidas. Projetos, soluções e novidades do universo tech japonês."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      {/* Open Graph / Facebook */}
      <meta
        property="og:title"
        content="NihonTech - Inovação Japonesa em Tecnologia"
      />
      <meta
        property="og:description"
        content="Descubra as inovações tecnológicas do Japão que transformam vidas. Projetos, soluções e novidades do universo tech japonês."
      />
      <meta property="og:image" content="/imgs/NihonTech.png" />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="NihonTech - Inovação Japonesa em Tecnologia"
      />
      <meta
        name="twitter:description"
        content="Descubra as inovações tecnológicas do Japão que transformam vidas. Projetos, soluções e novidades do universo tech japonês."
      />
      <meta name="twitter:image" content="/imgs/NihonTech.png" />
    </Head>
  );
}

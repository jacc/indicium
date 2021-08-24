import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export const Meta = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="https://github.com/jacc.png" />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://ven.earth" />
      <meta property="og:site_name" content="jack.link" />
      <meta property="og:image" content="https://github.com/jacc.png" />
      <meta name="theme-color" content="#93CAED" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="https://github.com/jacc.png" />
    </Head>
  );
};

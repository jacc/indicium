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
      <meta property="og:url" content="https://jack.link" />
      <meta property="og:site_name" content="jack.link" />
      <meta property="og:image" content="https://github.com/jacc.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="https://github.com/jacc.png" />
      <meta name="theme-color" 
      content="#ffffff" 
      media="(prefers-color-scheme: light)">
      <meta name="theme-color" 
      content="#000000" 
      media="(prefers-color-scheme: dark)">
    </Head>
  );
};

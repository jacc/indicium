module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/jacc",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/laf0nd",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/jlaf",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/jacklafond",
        permanent: true,
      },
      {
        source: "/lastfm",
        destination: "https://last.fm/user/j9ck",
        permanent: true,
      },
    ];
  },
};

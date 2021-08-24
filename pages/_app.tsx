import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "../components/Navbar";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useSound from "use-sound";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [playSwitchPageSound] = useSound("/switch.mp3");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    playSwitchPageSound();
  }, [router.pathname]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;700&amp;display=swap"
        />
      </Head>
      <Toaster position="bottom-right" />

      <div className="dark:bg-black flex flex-col min-h-screen py-16 overflow-hidden">
        <Navbar />
        <div className="h-full lg:px-10 px-10">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;

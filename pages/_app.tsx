import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider>
          <div className="flex flex-col min-h-screen">
              {/*<Navbar />*/}
              <div className="h-full lg:px-0 px-10">
                  <Component {...pageProps} />
              </div>
          </div>
      </ThemeProvider>
  )
}

export default MyApp

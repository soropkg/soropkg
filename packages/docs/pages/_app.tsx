import type { AppProps } from 'next/app'
import '../styles/global.css'

// nextra v3 injects the Layout and theme config via __nextra_internal__ global
// through its webpack loader — do NOT manually wrap with <Layout> here
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

/// Components
import BodyWrapper from "@/components/BodyWrapper"

/// Styles
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <BodyWrapper>
      <Component {...pageProps} />
    </BodyWrapper>
  </>
}

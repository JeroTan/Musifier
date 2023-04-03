import { Html, Head, Main, NextScript } from 'next/document'

/// Components
import HeadTagDef from '@/components/HeadTagDef'

export default function Document() {
  return <>
    <Html lang="en">
      <Head>
        <HeadTagDef />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  </>
    
  
}

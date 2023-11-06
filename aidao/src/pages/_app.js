import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Web3Provider } from '@/contexts/Web3Context'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </ChakraProvider>
  )

}

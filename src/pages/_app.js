import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { SessionProvider } from 'next-auth/react';

const theme = extendTheme({
  colors: {
    mainBackgroundColor: {
      500: "#FEF5F4",
    },
    mainColors: {
      100: '#262626',
      200: '#FFF',
      300: '#FA8072'
    },

  },
})

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp

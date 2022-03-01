import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer'

const Main = ({ children, router }) => {
  return (
    <>
      <Box as="main" pd={8}>
        <Head>
          <meta
            name="viewpoint"
            content="width=device-width, initial-scale=1"
          />

          <title>Teerapop - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />
        <Container mb="2rem" maxW="container.sm" pt={20}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default Main

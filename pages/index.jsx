import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import Section from '../components/Section/section'
import Paragraph from '../components/Paragraph/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Loader from '../components/Loader'
import Typed from 'react-typed'
import Skills from '../components/Skills/skills'

const Page = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 500)
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <>
          <Container maxW="container.lg">
            <Box
              borderRadius="lg"
              p={3}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              mb={6}
              align="center"
            >
              <Typed
                strings={[
                  'Hello, I&apos;m a front-end',
                  'developer',
                  'based in Thailand!',
                  'Hello, I&apos;m a front-end developer based in Thailand!'
                ]}
                typeSpeed={30}
                backSpeed={50}
              />
            </Box>

            <Box display={{ md: 'flex' }}>
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                  Teerapop Junchean
                </Heading>
                <p>Computer Science ( front-end developer ) </p>
              </Box>
              <Box
                flexShrink={0}
                mt={{ base: 7, md: 0 }}
                ml={{ md: 8 }}
                align="center"
              >
                <Image
                  src="images/profile.jpg"
                  alt="Profile"
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  maxWidth="150px"
                  display="inline-block"
                  borderRadius="full"
                />
              </Box>
            </Box>

            <Section delay={0.1}>
              <Heading as="h3" variant="section-title">
                About
              </Heading>
              <Paragraph>
                I&apos;m a front-end developer who had 2 years of experience in
                front-end which created various websites with user-friendly and
                I can be a back-end developer too. I&apos;m ready to work.
                I&apos;m seeking a stable company. I will surely be able to
                benefit your company. Specialized in React, JavaScript.
              </Paragraph>
              <Box my={4} align="center">
                <NextLink href="/works" passHref>
                  <Button rightIcon={<ChevronRightIcon />}>My Portfolio</Button>
                </NextLink>
              </Box>
            </Section>

            <Skills />
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Page

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
                <p>Computer Science ( front-end / back-end ) </p>
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
                I&apos;m a front-end developer and I can be a back-end developer
                too. My name is Teerapop Junchean. I&apos;m 21 years old.
                I&apos;m studying at Bangkok University. I&apos;m into
                blockchain and defi right now and I&apos;m ready to work.
                I&apos;m seeking for stable company which is about blockchain. I
                will surely be able to benefit your company.
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

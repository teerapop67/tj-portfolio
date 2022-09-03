import {
  Container,
  Heading,
  Box,
  Divider,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Head from 'next/head'
import ButtonYear from '../components/Buttons'
import LineContent from '../components/Line'
import { SubHeading } from '../components/Heading'
import Section from '../components/Section/section'
import styled from '@emotion/styled'

const BtnResume = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  color: ${({ color_mode }) => color_mode};
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ color_mode }) => color_mode};
  border-radius: 8px;

  :hover {
    opacity: 0.9;
  }
`

const Resume = () => {
  return (
    <>
      <Head>
        <title>Teerapop - Resume</title>
      </Head>
      <Container maxW="container.lg">
        <Box d="grid" gridTemplateColumns="1fr auto" w="full">
          <Heading as="h1" variant="section-title">
            Experience
          </Heading>
          <BtnResume color_mode={useColorModeValue('#222', '#00ff7f')}>
            <a href="/images/doc/Resume_by_Teerapop.pdf" target="_blank">
              Download Resume
            </a>
          </BtnResume>
        </Box>
        <Section delay={0.1}>
          <LineContent hBase="77em" hMd="75em" justify="center">
            <Box pl="15px" textAlign="left" maxW="350px">
              <Box mb="2.5em">
                <ButtonYear>2022</ButtonYear>
                <SubHeading>MedRefer (Freelance)</SubHeading>
                <Text>
                  - A web application for management data of hospital.
                  <br />
                  - Created table data for management user data.
                  <br />
                  - Users can create multiple username and password.
                  <br />- Using react, graphQL
                </Text>
              </Box>
              <Box mb="2.5em">
                <ButtonYear>2022 - present</ButtonYear>
                <SubHeading>Food Recipe Center</SubHeading>
                <Text>
                  - A responsive web application for helping people to figure
                  out what to cook.
                  <br />- Using react, styled-components, php.
                </Text>
              </Box>
              <Box mb="2.5em">
                <ButtonYear>2021 - present</ButtonYear>
                <SubHeading> The Rich</SubHeading>
                <Text>
                  Build my own project about Defi.
                  <br />
                  1. Decentralized exchange for my graduation project. <br />
                  2. Farmimg like PancakeSwap.
                  <br />
                  Using solidity, react and redux.
                </Text>
              </Box>
              <Box mb="2.5em">
                <ButtonYear>2021</ButtonYear>
                <SubHeading> AADS (Army Air Defense System)</SubHeading>
                <Text>
                  Work with a BU-MIT(Bangkok University) lab team.
                  <br />
                  A military program to control aircrafts from surveillance
                  radars around Thailand.
                  <br />
                  Using C#, .net, Gmap.net, MySQL.
                </Text>
              </Box>
              <Box mb="2.5em">
                <ButtonYear>2021</ButtonYear>
                <SubHeading>RANIRON</SubHeading>
                <Text>
                  Mini project that is about random numbers by using solidity
                  for the back-end in this system and react for front-end.
                </Text>
              </Box>
            </Box>
          </LineContent>
        </Section>

        {/* Education */}
        <Section delay={0.3}>
          <Heading as="h1" variant="section-title">
            Education
          </Heading>

          <Stack
            direction="row"
            h={{ base: '23em', md: '22em' }}
            p={2}
            mt={5}
            justify="right"
          >
            <Box textAlign="center" maxW="250px" mr={{ base: '0', md: '15px' }}>
              <Box mb="2.5em">
                <Box>
                  <ButtonYear>2013</ButtonYear> - <ButtonYear>2019</ButtonYear>
                </Box>
                <SubHeading>Ratwinit Bangkaow school</SubHeading>
                <Text>I had graduated in this shcool.</Text>
              </Box>
              <Box mb="2.5em">
                <Box>
                  <ButtonYear>2019</ButtonYear> - <ButtonYear>2023</ButtonYear>
                </Box>
                <SubHeading>Bangkok University</SubHeading>{' '}
                <Text>
                  Information Technology and Innovation (Computer Science)
                </Text>
              </Box>
            </Box>
            <Divider
              orientation="vertical"
              pr="1px"
              bg={useColorModeValue('#222', '#fff')}
            />
          </Stack>
        </Section>
      </Container>
    </>
  )
}

export default Resume

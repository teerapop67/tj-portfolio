import { Container, Heading, Box } from '@chakra-ui/react'
import Head from 'next/head'
import WorkItem from '../components/WorkItems'
import WorkImg from '../constants/workspace'

const Works = () => {
  return (
    <>
      <Head>
        <title>Teerapop - Portfolio</title>
      </Head>
      <Container maxW="container.lg">
        <Heading as="h1" variant="section-title">
          Works
        </Heading>
        <Box align="center">
          <Box mb="4rem">
            <WorkItem
              title="MedRefer"
              description="This is my first freelance project which is about a web application for management data of hospital. I created table data for management user data and users can create multiple username and password.              "
              objects={WorkImg.medRefer}
              isArrow={true}
            />
          </Box>

          <Box mb="4rem">
            <WorkItem
              title="Tamraidee"
              description="A responsive web application for helping people to figure out what to cook from ingredients in the refrigerator."
              objects={WorkImg.tamraidee}
              isArrow={true}
            />
          </Box>

          <Box mb="4rem">
            <WorkItem
              title="The Rich"
              description="This is about decentralized finance (Defi) and webpage NFT marketplace project that I used to do. I will keep doing the next one which is decentralized exchange (DEX) for my graduation project."
              objects={WorkImg.theRich}
              isArrow={true}
              link="https://therichdex.netlify.app/#/"
            />
          </Box>

          <Box mb="4rem">
            <WorkItem
              title="Pixel Art Drawable"
              description="I have created an art draw pixel project for anyone who would like to draw. "
              objects={WorkImg.drawable}
              isArrow={false}
              link="https://pixel-art-drawable.netlify.app"
            />
          </Box>

          <Box mb="4rem">
            <WorkItem
              title="Raniron"
              description="I have created a mini  project  that is about random numbers by using solidity for the back-end in this system and react for the front-end"
              objects={WorkImg.ranIron}
              isArrow={false}
              link="https://raniron.netlify.app"
            />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Works

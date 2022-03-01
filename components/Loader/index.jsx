import { Container, Box, Heading } from '@chakra-ui/react'

const Loader = () => {
  return (
    <>
      <Container>
        <Box height="85vh" display="flex">
          <Heading m="auto">
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Heading>
        </Box>
      </Container>
    </>
  )
}

export default Loader

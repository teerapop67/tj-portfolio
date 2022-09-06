import { Box, Container, Text, useColorModeValue, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LinkSocial = styled(Link)`
  color: ${({ colors }) => colors};
  :hover {
    color: ${({ colorModes }) => colorModes};
  }
`

const Footer = props => {
  return (
    <>
      <Box as="footer" w="100%" style={{ backdropFilter: 'blue(10px)' }}>
        <Container
          d="flex"
          justifyContent={{ base: 'center', md: 'space-between' }}
          maxW="container.md"
          wrap="wrap"
          height="80px"
          w="100%"
          p={5}
        >
          <Text d={{ base: 'none', md: 'inline-block' }}>
            &copy; 2021 Teerapop All right reversed
          </Text>
          <Box gap="20px" d="flex">
            <LinkSocial
              colorModes={useColorModeValue('#222', '#00ff7f')}
              colors={useColorModeValue('#555', '#fff')}
              href="https://www.facebook.com/benz.acdemy/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </LinkSocial>
            <LinkSocial
              colorModes={useColorModeValue('#222', '#00ff7f')}
              colors={useColorModeValue('#555', '#fff')}
              href="https://github.com/teerapop67"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </LinkSocial>
            <LinkSocial
              colorModes={useColorModeValue('#222', '#00ff7f')}
              colors={useColorModeValue('#555', '#fff')}
              href="https://twitter.com/benzztj"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </LinkSocial>
            <LinkSocial
              colorModes={useColorModeValue('#222', '#00ff7f')}
              colors={useColorModeValue('#555', '#fff')}
              href="https://www.instagram.com/benzztj/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </LinkSocial>
            <Text style={{ opacity: 0.4 }}>
              reference by &nbsp;
              <a
                href="https://www.craftz.dog/"
                style={{ textDecoration: 'underline', color: 'skyblue' }}
                target="_blank"
              >
                craftz.dog
              </a>
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer

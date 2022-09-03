import Logo from '../Logo/logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleBtn from '../Theme-toggle/theme-toggle-btn'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <>
      <NextLink href={href}>
        <Link
          p={2}
          bg={active ? 'green' : undefined}
          color={active ? '#202023' : inactiveColor}
          _hover={{ color: '#00FF7F' }}
        >
          {children}
        </Link>
      </NextLink>
    </>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{ backdropFilter: 'blue(10px)' }}
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          p={3}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading
              _hover={{ color: 'red' }}
              as="h1"
              size="lg"
              letterSpacing={'tighter'}
            >
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            flexGrow={1}
            mt={{ base: 4, nmd: 0 }}
          >
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/resume" path={path}>
              Resume
            </LinkItem>
          </Stack>

          <Box flex={1} align="right">
            <ThemeToggleBtn />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="options"
                ></MenuButton>
                <MenuList>
                  <NextLink href="/works" passHref>
                    <MenuItem _hover={{ color: '#00FF7F' }} as={Link}>
                      Works
                    </MenuItem>
                  </NextLink>
                  <NextLink href="/resume" passHref>
                    <MenuItem _hover={{ color: '#00FF7F' }} as={Link}>
                      Resume
                    </MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Navbar

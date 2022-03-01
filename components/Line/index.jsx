import { Stack, Divider, useColorModeValue } from '@chakra-ui/react'

const LineContent = ({ children, hBase, hMd, justify }) => {
  return (
    <>
      <Stack
        direction="row"
        h={{ base: `${hBase}`, md: `${hMd}` }}
        p={2}
        my={6}
        justify={justify}
      >
        <Divider
          orientation="vertical"
          pr="1px"
          bg={useColorModeValue('#222', '#fff')}
        />
        {children}
      </Stack>
    </>
  )
}

export default LineContent

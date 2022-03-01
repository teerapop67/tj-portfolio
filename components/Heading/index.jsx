import { Heading, useColorModeValue } from '@chakra-ui/react'

export const SubHeading = ({ children }) => {
  return (
    <>
      <Heading
        as="h5"
        fontSize="16px"
        variant="section-title"
        isTruncated
        color={useColorModeValue('#000', '#00ff7f')}
        ml={1}
      >
        {children}
      </Heading>
    </>
  )
}

import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const ItemSkill = ({ items, name }) => {
  return (
    <>
      <Box pl="15px" mb="2.5em">
        <Heading
          as="h5"
          variant="section-title"
          fontSize="16px"
          isTruncated
          color={useColorModeValue('#222', 'green')}
        >
          {name}
        </Heading>
        <Box d={{ base: 'block', md: 'flex' }}>
          <Box direction="column" mr="2rem">
            {items.slice(0, 5).map(item => (
              <Text py={2} key={item.lang}>
                &bull; {item.lang}
              </Text>
            ))}
          </Box>

          <Box direction="column">
            {items.slice(5).map(item => (
              <Text py={2} key={item.lang}>
                &bull; {item.lang}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ItemSkill

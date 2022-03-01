import styled from '@emotion/styled'
import { useColorModeValue, Button } from '@chakra-ui/react'

const BtnYear = styled(Button)`
  padding: 8px 20px;
  color: ${({ color_mode }) => color_mode};
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: default;
  border: 1px solid ${({ color_mode }) => color_mode};
  border-radius: 8px;

  :hover {
    background-color: transparent;
  }
`

const ButtonYear = ({ children }) => {
  return (
    <>
      <BtnYear color_mode={useColorModeValue('#222', '#00ff7f')}>
        {children}
      </BtnYear>
    </>
  )
}

export default ButtonYear

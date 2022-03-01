import Link from 'next/link'
// import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
// import { GiFootprint } from 'react-icons/gi'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  ling-height: 20px;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(10deg);
  }
`

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a>
          <LogoBox>
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily="M PLUS Rounded 1c"
              ml={3}
              fontWeight="bold"
            >
              <span
                style={{
                  display: 'flex',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  padding: '8px',
                  fontSize: '20px'
                }}
              >
                <h1 style={{ color: '#00FF7F' }}>T</h1>
                <h1 style={{ color: '#00FF7F' }}>J</h1>
              </span>
            </Text>
          </LogoBox>
          TEERAPOP
        </a>
      </Link>
    </>
  )
}

export default Logo

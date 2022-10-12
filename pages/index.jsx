import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import Section from '../components/Section/section'
import Paragraph from '../components/Paragraph/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Loader from '../components/Loader'
import Typed from 'react-typed'
import Skills from '../components/Skills/skills'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Page = () => {
  const [loading, setLoading] = useState(false)
  const [afterLoading, setAfterLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 500)
    setLoading(false)
    console.log('EEE')
    setAfterLoading(true)
  }, [])

  // THREE
  useEffect(() => {
    setUpCanvas()
    console.log('HEHEH')
  }, [afterLoading])
  //setUpCube
  const setUpCanvas = () => {
    //**scene**
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color('#1f2232')

    const loader = new THREE.CubeTextureLoader()
    loader.setPath('./images/logo/')

    const textureCube = loader.load([
      'richLogo.png',
      'richLogo.png',
      'richLogo.png',
      'richLogo.png',
      'richLogo.png',
      'richLogo.png'
    ])

    const geometry = new THREE.IcosahedronGeometry(1, 0)
    const material = new THREE.MeshBasicMaterial({
      color: 'yellow',
      envMap: textureCube
    })
    const mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh)

    const sizes = {
      widths: 200,
      heights: 200
    }

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.widths / sizes.heights,
      0.1,
      100
    )
    camera.position.z = 2
    scene.add(camera)

    //**Canvas**
    const canvas = document.getElementById('webgl')

    //**renderer**
    const renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(sizes.widths, sizes.heights)

    //**Obit Control**
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN
    }

    const clock = new THREE.Clock()

    //**animate**
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      //**update object**
      mesh.rotation.y = (Math.PI * elapsedTime) / 3

      //**OrbitControls**
      controls.update()

      //renderer
      renderer.render(scene, camera)
      renderer.setClearColor(0xffffff, 0)

      window.requestAnimationFrame(animate)
    }

    animate()
  }

  return (
    <>
      <>
        <Container maxW="container.lg">
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <canvas id="webgl"></canvas>
          </div>
          {loading ? (
            <>
              <Box
                borderRadius="lg"
                p={3}
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                mb={6}
                align="center"
              >
                <Typed
                  strings={[
                    'Hello, I&apos;m a front-end',
                    'developer',
                    'based in Thailand!',
                    'Hello, I&apos;m a front-end developer based in Thailand!'
                  ]}
                  typeSpeed={30}
                  backSpeed={50}
                />
              </Box>
              <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                  <Heading as="h2" variant="page-title">
                    Teerapop Junchean
                  </Heading>
                  <p>Computer Science ( front-end developer ) </p>
                </Box>
                <Box
                  flexShrink={0}
                  mt={{ base: 7, md: 0 }}
                  ml={{ md: 8 }}
                  align="center"
                >
                  <Image
                    src="images/profile.jpg"
                    alt="Profile"
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="150px"
                    display="inline-block"
                    borderRadius="full"
                  />
                </Box>
              </Box>
              <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                  About
                </Heading>
                <Paragraph>
                  I&apos;m a front-end developer who had 2 years of experience
                  in front-end which created various websites with user-friendly
                  and I can be a back-end developer too. I&apos;m ready to work.
                  I&apos;m seeking a stable company. I will surely be able to
                  benefit your company. Specialized in React, JavaScript.
                </Paragraph>
                sadsadsa
                <Box my={4} align="center">
                  <NextLink href="/works" passHref>
                    <Button rightIcon={<ChevronRightIcon />}>
                      My Portfolio
                    </Button>
                  </NextLink>
                </Box>
              </Section>
              <Skills />
            </>
          ) : (
            <Loader />
          )}
        </Container>
      </>
    </>
  )
}

export default Page

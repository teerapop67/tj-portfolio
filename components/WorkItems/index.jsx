import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Section from '../Section/section'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const WorkItem = ({ title, description, objects, isArrow, link }) => {
  let settings = {
    infinite: true,
    speed: 1200,
    arrows: isArrow ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <Section delay={0.1}>
        <Heading as="h5" isTruncated variant="section-title">
          {title}
        </Heading>
        <Box maxW="100%">
          <Slider {...settings}>
            {objects.map(evt => (
              <Image
                src={evt.imgSource}
                alt="img-works"
                width={500}
                height={400}
                layout="responsive"
              />
            ))}
          </Slider>
          <Text style={{ textIndent: 20, textAlign: 'justify' }} mt={5}>
            {description}
          </Text>
          {link && (
            <Text textAlign="left">
              <span>You can visit here: </span>
              <a
                style={{ color: useColorModeValue('purple', '#dfc7c7') }}
                href={link}
                target="_blank"
                rel="no-referrer"
              >
                {link}
              </a>
            </Text>
          )}
        </Box>
      </Section>
    </>
  )
}

export default WorkItem

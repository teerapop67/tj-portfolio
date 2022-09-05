import { Heading, Box } from '@chakra-ui/react'
import Section from '../Section/section'
import ItemSkill from '../../components//ItemsSkill'
import { skillFrontend, skillBackend, skillUxUi } from '../../constants/skills'
import LineContent from '../../components/Line'

const Skills = () => {
  return (
    <>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <LineContent hBase="68em" hMd="50em" justify="right">
          <Box direction="column">
            <ItemSkill items={skillFrontend} name="Front-end" />
            <ItemSkill items={skillBackend} name="Back-end" />
            <ItemSkill items={skillUxUi} name="UX/UI" />
          </Box>
        </LineContent>
      </Section>
    </>
  )
}

export default Skills

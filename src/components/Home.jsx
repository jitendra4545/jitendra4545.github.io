import { Box, Heading, Text, useMediaQuery, SimpleGrid, Image, Button, Link } from '@chakra-ui/react'
import AboutMe from './About'
import Skill from './Skills'
import Project from './Projects'
import ContactMe from './Contact'
import { ImLinkedin } from 'react-icons/im'
import Resume from '../Resume/Jitendra-Ghadei-Resume.pdf.pdf'
import GitHubStats from './GitHubStats'
import { BsGithub } from 'react-icons/bs'
import GitHubCalendar from 'react-github-calendar'
// import AOS from 'aos'
// import 'aos/dist/aos.css';
import { useEffect } from 'react'
function HomePage() {

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  // useEffect(()=>{
  //  AOS.init()
  // },[])

  return (
    <>
      <SimpleGrid  mt='12%' columns={{ base: '1', md: '2', lg: '2' }} spacing={20}>
        <Box w={{ base: '100%', md: '120%', lg: '140%' }} textAlign='left'>
          <Heading color='' as='h2' size='2xl'>I'm</Heading>
          <Heading color='blue' as='h2' size='2xl'>Jitendra Kumar Ghadei</Heading>
          <Heading color='' as='h2' size='2xl'>Full Stack Web Developer</Heading>
          <Text mt='3%' lineHeight='30px' fontSize='2xl' color='grey' >A Full Stack Developer who loves building projects.I am equipped with a variety of technologies and tools to help me build the best possible product.</Text>
          <Box mt='7%' gap='5%' alignItems={'right'} display='flex'>
            <Box>
              <Link href='https://www.linkedin.com/in/jitendra-ghadei-01424a228' target={'_blank'}> <ImLinkedin color='blue' size="40px" /></Link>
            </Box>
            <Box>
              <Link href='https://github.com/jitendra4545' target={'_blank'}>  <BsGithub size='40px' color='black' /></Link>
            </Box>
            <Box   >
             <Link href='https://drive.google.com/file/d/1iNwUQuC_PVgLBdaPtoDm5-mXL5VRd2Kf/view?usp=sharing' target={'_blank'}> <Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'><Link href={Resume}  download   >RESUME</Link></Button></Link>
            </Box>
          </Box>
        </Box>
        <Box w='100%' >
          <Box  justifyContent='right' display='flex'  >
            <Image boxShadow='   #02054B 0px 5px 15px;' borderRadius='50px' w='320px' src='https://avatars.githubusercontent.com/u/107980469?s=400&u=3bbaff5249432adc50d312eed688155755371caf&v=4' />
          </Box>
        </Box>
      </SimpleGrid>

      <AboutMe />
      <Skill />
      <GitHubCalendar/>
      <GitHubStats />
      <Project />
      <ContactMe />
    </>
  )

}

export default HomePage
import {Box,Heading,Text, useMediaQuery,SimpleGrid,Image, Button,Link} from '@chakra-ui/react'
import AboutMe from './About'
import Skill from './Skills'
import Project from './Projects'
import ContactMe from './Contact'

import Resume from '../Resume/Jitendra-Ghadei-Resume.pdf.pdf'
import GitHubStats from './GitHubStats'
function HomePage(){
   
        const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
      
        return (
         <>
          <SimpleGrid  bg='rgb(19, 39, 95)' mt='12%' columns={{base:'1',md:'2',lg:'2'}} spacing={20}>
                 <Box w={{base:'100%' ,md:'120%',lg:'140%'}}  textAlign='left'>
                   <Heading color='white' as='h2' size='2xl'>I'm</Heading>
                   <Heading color='#F60A68' as='h2' size='2xl'>Jitendra Kumar Ghadei</Heading>
                   <Heading color='white' as='h2' size='2xl'>Full Stack Web Developer</Heading>
                   <Text mt='3%' lineHeight='30px' fontSize='2xl' color='grey' >A Full Stack Developer who loves building projects.I am equipped with a variety of technologies and tools to help me build the best possible product.</Text>
                   <Box mt='7%' gap='5%' alignItems={'right'} display='flex'>
                    <Box>
                <Link href='https://www.linkedin.com/in/jitendra-ghadei-01424a228'> <Image w='50px' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' /></Link>
                    </Box>
                    <Box>
                      <Link href='https://github.com/jitendra4545'>  <Image w='55px' src='https://cdn3d.iconscout.com/3d/free/thumb/github-6343397-5221066.png' /></Link>
                    </Box>
                    <Box   >
                        <Button _hover={{bg:'blue'}} color='white' mt='10px' backgroundColor='#F60A68'><Link href={Resume} download  >CV</Link></Button>
                    </Box>
                   </Box>
                 </Box>
                 <Box w='100%' >
                    <Box  justifyContent='right' display='flex'  >
                  <Image  borderRadius='50px'  w='320px' src='https://avatars.githubusercontent.com/u/107980469?v=4' />
                  </Box>
                 </Box>
          </SimpleGrid>
          
          <AboutMe/>
          <Skill/>
         <GitHubStats/>
          <Project/>
          <ContactMe />
          </>
        )
    
}

export default HomePage
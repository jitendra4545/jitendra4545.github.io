import {Box,Heading,Text, useMediaQuery,SimpleGrid,Image, Button} from '@chakra-ui/react'
import AboutMe from './About'
import {Link} from 'react-router-dom'
import Skill from './Skills'
import Project from './Projects'
import ContactMe from './Contact'

function HomePage(){
   
        const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
      
        return (
         <>
          <SimpleGrid  bg='rgb(19, 39, 95)' mt='6%' columns={{base:'1',md:'2',lg:'2'}} spacing={10}>
                 <Box   textAlign='left'>
                   <Heading color='white' as='h2' size='2xl'>I'm</Heading>
                   <Heading color='#F60A68' as='h2' size='2xl'>Jitendra Kumar Ghadei</Heading>
                   <Heading color='white' as='h2' size='2xl'>Full Stack Web Developer</Heading>
                   <Text mt='3%' lineHeight='30px' fontSize='2xl' color='grey' >A Full Stack Developer who loves building projects.I am equipped with a variety of technologies and tools to help me build the best possible product.</Text>
                   <Box mt='7%' justifyContent='space-evenly' display='flex'>
                    <Box>
                 <Image w='50px' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' />
                    </Box>
                    <Box>
                        <Image w='55px' src='https://cdn3d.iconscout.com/3d/free/thumb/github-6343397-5221066.png' />
                    </Box>
                    <Box   >
                        <Button _hover={{bg:'blue'}} color='white' mt='10px' backgroundColor='#F60A68'><Link to='./All'></Link>See My Resume</Button>
                    </Box>
                   </Box>
                 </Box>
                 <Box >
                    <Box  justifyContent='right' display='flex'  >
                  <Image  borderRadius='60px'  w='300px' src='https://avatars.githubusercontent.com/u/107980469?v=4' />
                  </Box>
                 </Box>
          </SimpleGrid>
          
          <AboutMe/>
          <Skill/>
          <Project/>
          <ContactMe />
          </>
        )
    
}

export default HomePage
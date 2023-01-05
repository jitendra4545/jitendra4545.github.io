
import {Box, Heading, SimpleGrid,Image,Text, Spacer} from '@chakra-ui/react'


function AboutMe(){
    return (
        <Box mt='10%' >
           <Heading mb='5%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>About</Heading>
           <SimpleGrid gap="30" columns={{base:'1',md:'1',lg:'2'}}>
                <Box>
                     <Image borderRadius='50px' w='80%' src='https://media.istockphoto.com/id/942384628/vector/job-interview-cartoon-people-character-isolated-illustration.jpg?s=612x612&w=0&k=20&c=wm1IRL1suSmeM9udbAPcY1MmK4mIlLzSNGB7-fH-NIU=' />
                </Box>
                <Box  >
                <Text mt='3%' w='100%' textAlign='left' lineHeight='30px' fontSize='2xl' color='grey' >
                I am Result-oriented full-stack web developer, passionate about developing user-friendly web applications using MERN Stack.
               </Text>
               <Spacer/>
               <Text  textAlign='left' mt='2%'   lineHeight='30px' fontSize={{base:'2xl',md:'2xl',lg:'2xl'}} color='grey' >
               I enjoy developing websites and a keen interest in solving problems and coming up with effective solutions.
               </Text>
               <Spacer/>
               <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{base:'2xl',md:'2xl',lg:'2xl'}} color='grey' >
               Eager to be a part of a team which gives me ability to learn and grow.
                    </Text> 
                </Box>  
            </SimpleGrid> 
        </Box>
    )
}

export default AboutMe
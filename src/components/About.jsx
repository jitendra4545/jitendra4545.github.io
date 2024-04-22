
import { Box, Heading, SimpleGrid, Image, Text, Spacer } from '@chakra-ui/react'


function AboutMe() {
    return (
        <Box id='about' mt='10%' >
            <Heading mb='5%' color='blue' transition='step-start' textAlign='left' as='h2' size='2xl'>About</Heading>
            <SimpleGrid gap="30" columns={{ base: '1', md: '1', lg: '2' }}>
                <Box>
                    <Image borderRadius='50px' w='90%' src='https://previews.123rf.com/images/chagin/chagin1109/chagin110900024/10492929-business-people-in-an-office-environment.jpg' />
                </Box>
                <Box  >
                    <Text mt='3%' w='100%' textAlign='left' lineHeight='30px' fontSize='2xl' color='grey' >
                    A result-oriented full-stack web developer, passionate about developing user-friendly web applications using the MERN Stack, finds enjoyment in creating websites. With a keen interest in problem-solving and coming up with effective solutions, they are eager to be part of a team that provides opportunities for learning and growth.
                    </Text>
                    <Spacer />
                    {/* <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                        I enjoy developing websites and a keen interest in solving problems and coming up with effective solutions.
                    </Text>
                    <Spacer />
                    <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                        Eager to be a part of a team which gives me ability to learn and grow.
                    </Text> */}
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default AboutMe
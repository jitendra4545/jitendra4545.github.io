import { Box, Heading, SimpleGrid, Image, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import GitHubCalender from './GithubCalender'
import GitHubStats from './GitHubStats'
const data = [
    
{
    imgURL: 'https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png',
    name: 'HTML'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png',
    name: 'CSS'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png',
    name: 'Javascript'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png',
    name: 'React'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/redux.1b4bb5fceb01b19da59d.png',
    name: 'Redux'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/tailwind.e47ac876b8d4d0bba47a.png',
    name: 'Tailwind'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png',
    name: 'Chakra UI'
},
{
    imgURL: 'https://manojattri.vercel.app/static/media/typescript.9b1779a2fd3504559e59.png',
    name: 'TypeScript'
},
{
    imgURL: '	https://manojattri.vercel.app/static/media/jest.809768de8350fa5f6a21.png',
    name: 'Jest'
}


]


function Skill() {



    return (
        <Box mt='10%' >
            <Heading mb='5%' color='#02054B' transition='step-start' textAlign='left' as='h2' size='2xl'>Skills</Heading>
            <Heading as='h2' size='xl' color='#F60A68'>Frontend</Heading>
            <SimpleGrid mt='5%' gap="6" columns={{ base: '2', md: '3', lg: '3' }}>



                {
                    data.map((el) => (
                        <Box  _hover={{bg:'skyblue'}} bg='skyblue' m='auto' boxShadow='   #02054B 0px 5px 15px;' justifyContent='center' w={{ base: '11rem', md: "14rem", lg: '15rem' }} p={{ base: '10px 20px', md: '20px 70px' }} h={{ base: '12rem', md: '10rem', lg: '' }} gap='4' >
                            <Image src={el.imgURL} alt={el.name} />
                            <Text color='#02054B' fontWeight={'bold'}>{el.name}</Text>
                        </Box>
                    ))
                }


            </SimpleGrid>
            <SimpleGrid mt='7%' columns={{ base: '2', md: '4', lg: '4' }} >
                <Box >
                    <CircularProgress size='130px' value={75} color='orange.300'>
                        <CircularProgressLabel color='orange.500'>75%</CircularProgressLabel>
                    </CircularProgress>
                    <Heading as='h4' size='md' color='white'>HTML</Heading>
                </Box>
                <Box>
                    <CircularProgress size='130px' value={70} color='skyblue'>
                        <CircularProgressLabel color='skyblue' >70%</CircularProgressLabel>
                    </CircularProgress>
                    <Heading as='h4' size='md' color='white'>CSS</Heading>
                </Box>
                <Box>
                    <CircularProgress size='130px' value={80} color='yellow'>
                        <CircularProgressLabel color='yellow'>80%</CircularProgressLabel>
                    </CircularProgress>
                    <Heading as='h4' size='md' color='white'>JavaScript</Heading>
                </Box>
                <Box>
                    <CircularProgress size='130px' value={80} color='violet'>
                        <CircularProgressLabel color='violet'>80%</CircularProgressLabel>
                    </CircularProgress>
                    <Heading as='h4' size='md' color='white'>React</Heading>
                </Box>

            </SimpleGrid>

            <Heading as='h2' mt='7%' size='xl' color='#F60A68'>GitHub Calender</Heading>

            <Box>
                <GitHubCalender />

            </Box>
            {/* <Box>
                <GitHubStats/>
            </Box> */}
        </Box>
    )
}
export default Skill
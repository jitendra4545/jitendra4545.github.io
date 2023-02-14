
// import {Box, Grid, Heading,Text,Stack,Input,Textarea, Spacer,Button} from '@chakra-ui/react'
// import { PhoneIcon,EmailIcon } from '@chakra-ui/icons'
// import {FcPhone} from 'react-icons/fc'
// import {ImLocation2} from 'react-icons/im'
// import {SiGmail} from 'react-icons/si'
// function ContactMe(){
//     return (

//         <Box mt='7%' >
//            <Heading mb='2%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>Contact</Heading>
//                <Text mt='4%' mb='3%' textAlign='left' color='white' >Submit the form below to get in touch with me</Text> 
//             <Grid  justifyContent={'space-between'} gap='20' p='20px' w='80%' gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} >
//                 <Box >
//                        <Box>
//                                <Box boxShadow=' #F60A68 0px 2px 2px 2px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'  padding='15px' display={'flex'}>
//                                   <FcPhone size='30px'/>

//                                 <Box ml='5px' textAlign={'left'}>
//                                     <Box color='white'>
//                                         <Heading  size='md'>Phone :</Heading>
//                                         </Box>
//                                     <Box color='grey'>
//                                     <Text textAlign='left' mt='2%' lineHeight='30px' fontSize='xl' color='grey' >
//                                         +919348788367
//                                         </Text>
//                                     </Box>
//                                 </Box>

//                                </Box>
//                                <Box boxShadow=' #F60A68 0px 2px 2px 2px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'mt='15px'  padding='15px' display={'flex'}>
//                                   <SiGmail color='yellow' size='30px'/>

//                                 <Box ml='5px' textAlign={'left'}>
//                                     <Box color='white'>
//                                         <Heading  size='md'>Email :</Heading>
//                                         </Box>
//                                     <Box color='grey'>
//                                     <Text textAlign='left' mt='2%' lineHeight='30px' fontSize='xl' color='grey' >
//                                     jitendra45.js45@gmail.com
//                                         </Text>
//                                     </Box>
//                                 </Box>

//                                </Box>
//                                <Box boxShadow=' #F60A68 0px 2px 2px 2px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;' mt='15px' padding='15px' display={'flex'}>
//                                   <ImLocation2 color='red' size='30px'/>

//                                 <Box ml='5px' textAlign={'left'}>
//                                     <Box color='white'>
//                                         <Heading  size='md'>Location :</Heading>
//                                         </Box>
//                                     <Box color='grey'>
//                                     <Text textAlign='left' mt='2%' lineHeight='30px' fontSize='xl' color='grey' >
//                                     Cuttack, Odisha
//                                         </Text>
//                                     </Box>
//                                 </Box>

//                                </Box>
//                        </Box>
//                 </Box>
//                 <Box>
//                       <Stack spacing={4}>
//                                <Input type='text' color='white' placeholder='Enter your name' size='md' />
//                                <Input type='email' color='white' placeholder='Enter your email' size='md' />
//                                <Input type='mobile' color='white' placeholder='Enter your Mobile No' size='md' />
//                                <Textarea color='white' placeholder='Enter your message'size='lg'  />

//                       </Stack>

//                     <Button borderRadius='30px'  mt='55px' bg='#F60A68' color='white' _hover={{bg:'blue'}} >Let's Connect</Button>

//                 </Box>
//             </Grid>
//         </Box>
//     )
// }

// export default ContactMe






import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im'
function ContactMe() {
  return (
    <Box id='contact'>
       <Heading mb='1%' mt='5%' color='blue' transition='step-start' textAlign='left' as='h2' size='2xl'>Contact</Heading>
    <Container  maxW="full" mt={5} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="blue"
          color="white"
          borderRadius="lg"
          boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 10 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 10 }}>
              <WrapItem>
                <Box>
                  
                  <Text mt={{ sm: 3, md: 3, lg: 5 }}  color="white">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="black" size="20px" />}>
                        +91-9348788367
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="yellow" size="20px" />}>
                        jitendra45.js45@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="red" size="20px" />}>
                        Cuttack,Odisha
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <a href='https://www.facebook.com/profile.php?id=100008782692796'><IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                    /></a>

                    <a href='https://github.com/jitendra4545'><IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    /> </a>

                    <a href='https://www.linkedin.com/in/jitendra-ghadei-01424a228'> <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<ImLinkedin size="28px" />}
                    /></a>

                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input placeholder='Enter Name' type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input placeholder='Enter Email' type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="black"
                          color="white"
                          _hover={{bg:'blue'}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </Box>
  );
}

export default ContactMe

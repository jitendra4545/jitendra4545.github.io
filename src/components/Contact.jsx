

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
  Textarea
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im'
function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6rpfs3r', 'template_2qx6ujl', form.current, '_dmCC2tc_51Th-A-D')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    alert(`hi`)
  };




  return (
    <Box id='contact' pt="7%">
      <Heading mb='1%' mt='5%' color='blue' transition='step-start' textAlign='left' as='h2' size='2xl'>Contact</Heading>
      <Container maxW="full" mt={5} centerContent overflow="hidden">
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

                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
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
                      <a target={'_blank'} href='https://www.facebook.com/profile.php?id=100008782692796'><IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      /></a>

                      <a target={'_blank'} href='https://github.com/jitendra4545'><IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      /> </a>

                      <a target={'_blank'} href='https://www.linkedin.com/in/jitendra-ghadei-01424a228'> <IconButton
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
                        {/* <form  onSubmit={sendEmail} > */}
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input name='from_name' placeholder='Enter Name' type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input name='from_email' placeholder='Enter Email' type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            name='message'
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button

                            onClick={sendEmail}
                            variant="solid"
                            bg="black"
                            color="white"
                            _hover={{ bg: 'blue' }}>
                            Send Message
                          </Button>
                        </FormControl>
                        {/* </form> */}
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










function SmallerNeighbourElement(n, arr) {
  let ans = [];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {

   
    while (stack.length > 0 && arr[i] <= stack[stack.length - 1]) {
      stack.pop();

    }

    if (stack.length == 0) {
      ans.push(-1)
    } else {
      ans.push(stack[stack.length - 1]);
    }
    
    stack.push(arr[i])
  }
  console.log(ans.join(" "))
}






import {Box, Grid, Heading,Text,Stack,Input,Textarea, Spacer,Button} from '@chakra-ui/react'
import { PhoneIcon,EmailIcon } from '@chakra-ui/icons'
import {FcPhone} from 'react-icons/fc'
import {ImLocation2} from 'react-icons/im'
import {SiGmail} from 'react-icons/si'
function ContactMe(){
    return (
       
        <Box mt='7%' >
           <Heading mb='2%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>Contact</Heading>
               <Text mt='4%' mb='3%' textAlign='left' color='white' >Submit the form below to get in touch with me</Text> 
            <Grid  justifyContent={'space-between'} gap='20' p='20px' w='80%' gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} >
                <Box >
                       <Box>
                               <Box boxShadow=' #F60A68 0px 2px 2px 2px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;' border='1px solid green' padding='15px' display={'flex'}>
                                  <FcPhone size='30px'/>
                        
                                <Box ml='5px' textAlign={'left'}>
                                    <Box color='white'>
                                        <Heading  size='md'>Phone :</Heading>
                                        </Box>
                                    <Box color='grey'>
                                    <Text textAlign='left' mt='2%' lineHeight='30px' fontSize='xl' color='grey' >
                                        +919348788367
                                        </Text>
                                    </Box>
                                </Box>
                                    
                               </Box>
                               <Box boxShadow=' #F60A68 0px 2px 2px 2px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'mt='15px' border='1px solid green' padding='15px' display={'flex'}>
                                  <SiGmail color='red' size='30px'/>
                        
                                <Box ml='5px' textAlign={'left'}>
                                    <Box color='white'>
                                        <Heading  size='md'>Email :</Heading>
                                        </Box>
                                    <Box color='grey'>
                                    <Text textAlign='left' mt='2%' lineHeight='30px' fontSize='xl' color='grey' >
                                    jitendra45.js45@gmail.com
                                        </Text>
                                    </Box>
                                </Box>
                                    
                               </Box>
                               <Box boxShadow=' #F60A68 0px 2px 2px 2px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;' mt='15px' border='1px solid green' padding='15px' display={'flex'}>
                                  <ImLocation2 color='yellow' size='30px'/>
                        
                                <Box ml='5px' textAlign={'left'}>
                                    <Box color='white'>
                                        <Heading  size='md'>Location :</Heading>
                                        </Box>
                                    <Box color='grey'>
                                    <Text textAlign='left' mt='2%' lineHeight='30px' fontSize='xl' color='grey' >
                                    Cuttack, Odisha
                                        </Text>
                                    </Box>
                                </Box>
                                    
                               </Box>
                       </Box>
                </Box>
                <Box>
                      <Stack spacing={4}>
                               <Input type='text' color='white' placeholder='Enter your name' size='md' />
                               <Input type='email' color='white' placeholder='Enter your email' size='md' />
                               <Input type='mobile' color='white' placeholder='Enter your Mobile No' size='md' />
                               <Textarea color='white' placeholder='Enter your message'size='lg'  />
                               
                      </Stack>
                      
                    <Button borderRadius='30px'  mt='55px' bg='#F60A68' color='white' _hover={{bg:'blue'}} >Let's Connect</Button>
                
                </Box>
            </Grid>
        </Box>
    )
}

export default ContactMe




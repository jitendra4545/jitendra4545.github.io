
import {Box, Grid, Heading,Text,Stack,Input,Textarea, Spacer} from '@chakra-ui/react'
import { PhoneIcon,EmailIcon } from '@chakra-ui/icons'

function ContactMe(){
    return (
       
        <Box mt='7%' >
           <Heading mb='2%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>About</Heading>
               <Text textAlign='left' color='white' >Submit the form below to get in touch with me</Text> 
            <Grid p='20px' w='80%' gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} >
                <Box>
                     {/* <Box display='flex'>
                        <PhoneIcon  color='red' />
                       
                        <Heading mb='2%' color='white' transition='step-start' textAlign='left' as='h4' size='md'>About</Heading>
                     </Box>
                     <Box>
                        <EmailIcon/>
                     </Box>
                     <Box>

                     </Box> */}
                </Box>
                <Box>
                      <Stack spacing={3}>
                               <Input placeholder='extra small size' size='md' />
                               <Input placeholder='small size' size='md' />
                               <Input placeholder='medium size' size='md' />
                               <Textarea placeholder='Here is a sample placeholder'size='md'/>
                      </Stack>
                
                </Box>
            </Grid>
        </Box>
    )
}

export default ContactMe




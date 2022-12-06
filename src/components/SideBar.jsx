
import {Text,Box,Image,Link, Heading, Stack} from "@chakra-ui/react"


function SideBar(){
return (
   <Box >
   <Box >
      <Box>
      <Image src="https://avatars.githubusercontent.com/u/107980469?v=4" w="40%" borderRadius="50%" />
      </Box>
      <Heading color="white" mt="1" as='h4' size="sm" mb='0px'  >Jitendra Kumar Ghadei</Heading>
      <Text color="grey" as='sub'>Full Stack Web Developer</Text>
   </Box>
   <Box  justifyContent='space-evenly' display='flex' >
       <Box display='grid'>
           <Heading textAlign='left' color="white"   mb='3px' as='h5'>Country :</Heading>
           <Heading textAlign='left' color="white" mb='3px' mt="1" as='h5'>City :</Heading>
           <Heading textAlign='left' color="white" mt="1"  as='h5'>Age :</Heading> 
       </Box>
       <Box display='grid' >
       <Text color="grey"  mb='3px' as='sub'>Full Stack Web Developer</Text>
       <Text color="grey" mb='3px' mt="1" as='sub'>Full Stack Web Developer</Text>
       <Text color="grey" mt="1" as='sub'>Full Stack Web Developer</Text>
       </Box>
   </Box>
   <Box border="2px solid red" >
      
      
      
      
      hi</Box>
   </Box>
)

}

export default SideBar
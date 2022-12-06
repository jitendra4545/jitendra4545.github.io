
import {Button,Text,Box,Image,Link, Heading, Stack,CircularProgress,CircularProgressLabel,Spacer} from "@chakra-ui/react"
import {CheckIcon} from "@chakra-ui/icons"

function SideBar(){
return (
   <Box minHeight="100vh" >
   <Box backgroundColor="#09053B" padding="20px" >
      <Box>
      <Image src="https://avatars.githubusercontent.com/u/107980469?v=4" w="60%" borderRadius="50%" />
      </Box>
      <Heading color="white" mt="1" as='h4' size="sm" mb='0px'  >Jitendra Kumar Ghadei</Heading>
      <Text color="grey" as='sub'>Full Stack Web Developer</Text>
   </Box>
   <Box padding="20px"  >
      
      <Box position='sticky'  justifyContent='space-between' display='flex'>
       <Box display='grid'>
           <Heading textAlign="left" color="white"   mb='3px' as='h5'>State :</Heading>
           <Heading textAlign="left" color="white" mb='3px' mt="1" as='h5'>City :</Heading>
           <Heading textAlign="left" color="white" mt="1"   as='h5'>Age :</Heading> 
       </Box>
       <Box display='grid' >
           <Text color="grey" mt='22px'  as='sub'>Odisha</Text>
           <Text color="grey"  as='sub'>Cuttack</Text>
            <Text color="grey" mb='10px' as='sub'>24</Text>
       </Box>
       </Box>
      <hr  ></hr>
      <Box display="flex" justifyContent='space-between' >
         <Box display="grid">
         <CircularProgress value={100} color='gold'>
                   <CircularProgressLabel color="grey">100%</CircularProgressLabel>
          </CircularProgress>
          <Heading textAlign="center" color="white"   mt='3px' as='h5'>Odia</Heading>
         </Box>
         <Box display="grid">
         <CircularProgress value={80} color='gold'>
                   <CircularProgressLabel color="grey">80%</CircularProgressLabel>
          </CircularProgress>
          <Heading textAlign="center" color="white"   mt='3px' as='h5'>English</Heading>
         </Box>
         <Box display="grid">
         <CircularProgress value={70} color='gold'>
                   <CircularProgressLabel color="grey">70%</CircularProgressLabel>
          </CircularProgress>
          <Heading textAlign="center" color="white"   mt='3px' as='h5'>Hindi</Heading>
         </Box>
         </Box>
     
         <Box textAlign="left" >
                    <CheckIcon color="gold" /> <Text color="grey" mb='10px' as='sub'>HTML</Text>
                    <Spacer/>
                    <CheckIcon color="gold" /> <Text color="grey" mb='10px' as='sub'>CSS</Text>
                    <Spacer/>
                    <CheckIcon color="gold"/> <Text color="grey" mb='10px' as='sub'>JAVASCRIPT</Text>
                    <Spacer/>
                    <CheckIcon color="gold" /> <Text color="grey" mb='10px' as='sub'>REACT</Text>
                    <Spacer/>
                    <CheckIcon color="gold" /> <Text color="grey" mb='10px' as='sub'>REDUX</Text>
                    <Spacer/>
                    <CheckIcon color="gold" /> <Text color="grey" mb='10px' as='sub'>TYPESCRIPT</Text>
                    <Spacer/>
                    <CheckIcon color="gold" /> <Text color="grey" mb='10px' as='sub'>CHAKRA UI</Text>
         </Box>

         <Button  border='0' backgroundColor='#07052F' borderRadius='0%' padding='10px'  color='gold'>Download Resume</Button>
   </Box>
     <Box border="2px solid red" height="auto" width='250px'  >
      
      
      
      </Box>
   </Box>
)

}

export default SideBar
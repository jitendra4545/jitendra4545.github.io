import React from 'react'
import {Link} from 'react-router-dom'
import {
    Box, Button, Heading, TabList, Tabs,Tab, useMediaQuery,
    useDisclosure,
    Drawer,
    DrawerCloseButton,
    DrawerBody,
    DrawerContent,DrawerOverlay,
    DrawerHeader,
    Grid

} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import MainRoutes from './MainRoutes'
function Navbar(){
    const [isSmall]=useMediaQuery('(min-width: 780px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    return(
      
        <Box  bg='rgb(19, 39, 95)' zIndex='1000' position='sticky' top='0px' padding='10px 20px ' boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;' justifyContent='space-between' display='flex'>
           
            <Box >
               <Heading fontStyle='italic' color='white'>Jitendra</Heading>  
            </Box>
            {
                  isSmall ?
//height='10vh' boxShadow=' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
                  <Box  >  
            <Tabs  variant='solid-rounded'>
                <TabList  gap='8' >
                  <Link to="/"><Tab >Home</Tab></Link>
                   <Link to='/about'><Tab>About</Tab></Link> 
                  <Link to='/project'><Tab>Projects</Tab></Link> 
                  <Link to='/skill'><Tab>Skills</Tab></Link> 
                   <Link to='/contact'><Tab>Contact Me</Tab></Link> 
                   </TabList>
         </Tabs> 
         </Box>

                 :  

                 <Box  >
                 <Button ref={btnRef} colorScheme='gold' backgroundColor='#F60A68' onClick={onOpen}>
                < HamburgerIcon />
                 </Button>
                 <Drawer
                   isOpen={isOpen}
                   placement='right'
                   onClose={onClose}
                   finalFocusRef={btnRef}
                  
                 >
                   <DrawerOverlay  />
                   <DrawerContent>
                     <DrawerCloseButton />
                     
           
                     <DrawerBody  bg='#F60A68'>
                      <Grid mt='19%' gap='10'>
                       {/* <Box>
                            <Link><Heading>Home</Heading></Link>
                        </Box> */}
                           <Box onClick={onClose}>
                           <Heading _hover={{color:"rgb(19, 39, 95)"}} color='white' textAlign='left' as='h3' size='lg'><Link to='/'><h2></h2>Home</Link></Heading> 
                        </Box>
                          <Box onClick={onClose}>
                          <Heading _hover={{color:"rgb(19, 39, 95)"}} color='white' textAlign='left' as='h3' size='lg'><Link to='/about'>About</Link></Heading> 
                        </Box>
                          <Box onClick={onClose}>
                          <Heading _hover={{color:"rgb(19, 39, 95)"}} color='white' textAlign='left' as='h3' size='lg'> <Link to='/project'>Project</Link></Heading> 
                        </Box>
                        <Box onClick={onClose}>
                        <Heading _hover={{color:"rgb(19, 39, 95)"}} color='white' textAlign='left' as='h3' size='lg'> <Link to='skill'>Skills</Link></Heading> 
                        </Box>
                        <Box onClick={onClose}>
                        <Heading _hover={{color:"rgb(19, 39, 95)"}} color='white' textAlign='left' as='h3' size='lg'><Link to='/contact'>Contact</Link></Heading> 
                        </Box>
                            </Grid>
                     </DrawerBody>
           
                   
                   </DrawerContent>
                 </Drawer>
               </Box>

            } 
          

         </Box>
    )
}

export default Navbar
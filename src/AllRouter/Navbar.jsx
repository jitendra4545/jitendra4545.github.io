import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {
  Box, Button, Heading, TabList, Tabs, Tab, useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent, DrawerOverlay,
  DrawerHeader,
  Grid,


} from '@chakra-ui/react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HamburgerIcon } from '@chakra-ui/icons'

function Navbar() {
  const [isSmall] = useMediaQuery('(min-width: 780px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isscroll, setisscroll] = useState(false);
  const btnRef = React.useRef()

  function isScrolling() {
    if (window.scrollY > 80) {
      setisscroll(true);
    } else {
      setisscroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);


  return (

    <Box bg={isscroll ? "#02054B":'white'} zIndex='1000' position='sticky' top='0px' padding={{ base: '15px 30px', md: '15px 40px', lg: '15px 90px' }} boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, skyblue 0px 4px 6px -2px;' justifyContent='space-between' display='flex'>

      <Box >
        <Link to='/'><Heading fontStyle='italic' color={isscroll ? 'white':"#02054B"}>Jitendra</Heading> </Link>
      </Box>
      {
        isSmall ?
          //height='10vh' boxShadow=' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
          <Box  >
            <Tabs color={'blue'} variant='solid-rounded'>
              <TabList gap='3' >

                <Link to="/"><Tab color={isscroll ? 'white':"#02054B"} >Home</Tab></Link>
                <Link to='/about'><Tab color={isscroll ? 'white':"#02054B"} >About</Tab></Link>
                <Link to='/project'><Tab color={isscroll ? 'white':"#02054B"} >Projects</Tab></Link>
                <Link to='/skill'><Tab color={isscroll ? 'white':"#02054B"} >Skills</Tab></Link>
                <Link to='/contact'><Tab color={isscroll ? 'white':"#02054B"} >Contact Me</Tab></Link>
                <a href='https://drive.google.com/file/d/1iNwUQuC_PVgLBdaPtoDm5-mXL5VRd2Kf/view?usp=sharing'><Tab color={isscroll ? 'white':"#02054B"} >Resume</Tab></a>
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
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />


                <DrawerBody bg='#F60A68'>
                  <Grid mt='19%' gap='10'>
                    {/* <Box>
                            <Link><Heading>Home</Heading></Link>
                        </Box> */}
                    <Box onClick={onClose}>
                      <Heading _hover={{ color: "rgb(19, 39, 95)" }} color='white' textAlign='left' as='h3' size='lg'><Link to='/'><h2></h2>Home</Link></Heading>
                    </Box>
                    <Box onClick={onClose}>
                      <Heading _hover={{ color: "rgb(19, 39, 95)" }} color='white' textAlign='left' as='h3' size='lg'><Link to='/about'>About</Link></Heading>
                    </Box>
                    <Box onClick={onClose}>
                      <Heading _hover={{ color: "rgb(19, 39, 95)" }} color='white' textAlign='left' as='h3' size='lg'> <Link to='/project'>Project</Link></Heading>
                    </Box>
                    <Box onClick={onClose}>
                      <Heading _hover={{ color: "rgb(19, 39, 95)" }} color='white' textAlign='left' as='h3' size='lg'> <Link to='skill'>Skills</Link></Heading>
                    </Box>
                    <Box onClick={onClose}>
                      <Heading _hover={{ color: "rgb(19, 39, 95)" }} color='white' textAlign='left' as='h3' size='lg'><Link to='/contact'>Contact</Link></Heading>
                    </Box>
                    <Box onClick={onClose}>
                      <Heading _hover={{ color: "rgb(19, 39, 95)" }} color='white' textAlign='left' as='h3' size='lg'><a href='https://drive.google.com/file/d/1iNwUQuC_PVgLBdaPtoDm5-mXL5VRd2Kf/view?usp=sharing'>Resume</a></Heading>
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
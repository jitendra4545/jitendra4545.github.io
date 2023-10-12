import React, { useState, useEffect } from 'react'
import { Link as Think } from '@chakra-ui/react'
import {HashLink as Link} from 'react-router-hash-link'
import {
  Box, Button, Heading, TabList, Tabs, Tab, useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent, DrawerOverlay,
  DrawerHeader,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
// Link


} from '@chakra-ui/react'
import Resume from '../Resume/Jitendra_Kumar_Ghadei_Resume.pdf'
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

  const handleOpen=()=>{
    window.open(`https://drive.google.com/file/d/1XzPt59GbCmh5TxvAM5eEjxSHSyYT6Xdb/view?usp=sharing`)
  }

  return (

    <Box  bg={isscroll ? "blue" : 'white'} zIndex='1000' position='sticky' top='0px' padding={{ base: '15px 30px', md: '15px 40px', lg: '10px 90px' }} boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, skyblue 0px 4px 6px -2px;' justifyContent='space-between' display='flex'>

      <Box >
        <Link smooth to="#home"><Heading fontStyle='italic' color={isscroll ? 'white' : "blue"}>Jitendra</Heading> </Link>
      </Box>
      {
        isSmall ?
          //height='10vh' boxShadow=' rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
          <Box  >
            <Tabs color={'blue'} variant='solid-rounded'>
              <TabList gap='3' >

                <Link  smooth to="#home"><Tab color={isscroll ? 'white' : "#02054B"} >Home</Tab></Link>
                <Link smooth to='#about'><Tab color={isscroll ? 'white' : "#02054B"} >About</Tab></Link>
                <Link smooth to='#project'><Tab color={isscroll ? 'white' : "#02054B"} >Projects</Tab></Link>
                <Link smooth to='#skill'><Tab color={isscroll ? 'white' : "#02054B"} >Skills</Tab></Link>
                <Link smooth to='#contact'><Tab color={isscroll ? 'white' : "#02054B"} >Contact Me</Tab></Link>
                <Think onClick={handleOpen}  href={Resume}  download   ><Tab color={isscroll ? 'white' : "#02054B"}>Resume</Tab></Think>
              </TabList>
            </Tabs>
          </Box>

          :

          <Box  >
            <Menu >
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                background={isscroll ? 'white' : "blue"}
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList fontSize='20px' fontWeight={'bold'} backgroundColor={'blue'}>
                <Link  smooth to="#home"><MenuItem _focus={{ background: 'blue', color: "white" }}  >Home</MenuItem></Link>
                <Link smooth to='#about'> <MenuItem _focus={{ background: 'blue', color: "white" }}>About</MenuItem></Link>
                <Link smooth to='#project'> <MenuItem _focus={{ background: 'blue', color: "white" }}>Projects</MenuItem></Link>
                <Link smooth to='#skill'> <MenuItem _focus={{ background: 'blue', color: "white" }}>Skills</MenuItem></Link>
                <Link smooth to='#contact'> <MenuItem _focus={{ background: 'blue', color: "white" }}>Contact Me</MenuItem></Link>
                <a href='https://drive.google.com/file/d/1iNwUQuC_PVgLBdaPtoDm5-mXL5VRd2Kf/view?usp=sharing'> <MenuItem _focus={{ background: 'blue', color: "white" }}>Resume</MenuItem></a>
              </MenuList>
            </Menu>

          </Box>
      }


    </Box>
  )
}

export default Navbar



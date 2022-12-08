import {Box,Flex,Heading,Text, useMediaQuery,Grid,GridItem} from "@chakra-ui/react"
import { useState } from "react"
import SideBar from "./SideBar"
import {DragHandleIcon,HamburgerIcon} from '@chakra-ui/icons'
import Profile from "./Profile"

function HomePage(){
    
        const [isDesktop] = useMediaQuery('(min-width: 920px)')
        const [open,setOpen]=useState(true)
       const handleSidebar=()=>{
            setOpen(!open)
       }

       

        return (
         <Box>
            {isDesktop ?
           <Box gap='20' display='flex'>
            <Box border="3px solid red" ml='20px' height='100%' width="250px" position='fixed'  >

                <SideBar/>
                
            </Box>  
           
           <Box border="3px solid red" ml='300px'  width="90vw"   >
           
            
            <Profile/>
           </Box>
          
           <Box  border="3px solid red"   height="100%"  width="5vw" >
           <Heading  color="gold"></Heading>
           </Box>
           </Box>
          
            
          
          
          :





            
            <Box gap="20"  display="flex">
              
                
             {
                open ? 

                <Box  ml='20px' >
                    <Text onClick={handleSidebar} color="grey"><DragHandleIcon/></Text>
                    </Box>  
                  :
                  <Box onClick={handleSidebar} border="3px solid red" ml='20px' width="250px">
                  <SideBar/>
                  
              </Box> 
             }   
            
           <Box border="3px solid red"  width="90%">
            <Heading  color="gold">

            
            </Heading>
           </Box>
           
           
           <Box  mr='20px' >
           <Text color="grey"><HamburgerIcon /></Text>
           </Box>
           </Box> 
           
           }
          </Box>
        
        )
      }


export default HomePage;




//for Sidebar style

// function DrawerExample() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const btnRef = React.useRef()
  
//     return (
//       <>
//         <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
//           Open
//         </Button>
//         <Drawer
//           isOpen={isOpen}
//           placement='right'
//           onClose={onClose}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerCloseButton />

//             <DrawerHeader>Create your account</DrawerHeader>
  
//             <DrawerBody>
//               <Input placeholder='Type here...' />
//             </DrawerBody>
  
//             <DrawerFooter>
//               <Button variant='outline' mr={3} onClick={onClose}>
//                 Cancel
//               </Button>
//               <Button colorScheme='blue'>Save</Button>
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       </>
//     )
//   }
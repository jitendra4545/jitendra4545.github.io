
import './App.css';
import {Box} from '@chakra-ui/react'
import Navbar from './AllRouter/Navbar';
import MainRoutes from './AllRouter/MainRoutes';



function App() {

//code #02054B
  return (
    <Box   bg="skyblue"  className='App'> 
   
   <Navbar/>
   <Box width={{base:'90%',md:'92%',lg:'70%'}} margin='auto'>
    
    <Box>
        
         <MainRoutes/>
     </Box>  
     </Box>
    </Box>

  )
}

export default App;

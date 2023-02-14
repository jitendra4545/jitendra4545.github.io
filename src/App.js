
import './App.css';
import {Box} from '@chakra-ui/react'
import Navbar from './AllRouter/Navbar';
import MainRoutes from './AllRouter/MainRoutes';

//linear-gradient(135deg,#3b4ecf 0%,#041f3e 100%)

function App() {

//code #02054B
  return (
    <Box id='home'  bg=""  className='App'> 
   
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

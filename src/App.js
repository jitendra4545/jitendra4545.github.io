import logo from './logo.svg';
import './App.css';
import {Box,Text,Link,Image,Grid, Heading} from '@chakra-ui/react'
import Navbar from './AllRouter/Navbar';
import MainRoutes from './AllRouter/MainRoutes';
import HomePage from './components/Home';


function App() {
   
  //_hover={{color:"rgb(19, 39, 95)"}}
  return (
    <Box   bg='rgb(19, 39, 95)'  className='App'> 
   
   
   <Box width={{base:'90%',md:'92%',lg:'70%'}} margin='auto'>
    
    <Box>
         <Navbar/>
         <MainRoutes/>
     </Box>  
     </Box>
    </Box>

  )
}

export default App;

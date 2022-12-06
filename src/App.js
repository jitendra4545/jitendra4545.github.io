import logo from './logo.svg';
import './App.css';
import {Box,Text,Link,Image} from '@chakra-ui/react'
import Navbar from './components/SideBar';
import HomePage from './components/HomePage';
function App() {
  return (
    <Box border="4px solid green" backgroundColor="rgb(1,22,39)"  className='App'> 
           <HomePage  />
    </Box>

  )
}

export default App;

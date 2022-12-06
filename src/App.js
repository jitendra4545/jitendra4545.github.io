import logo from './logo.svg';
import './App.css';
import {Box,Text,Link,Image} from '@chakra-ui/react'
import Navbar from './components/SideBar';
import HomePage from './components/HomePage';
function App() {
  return (
    <Box minHeight="100vh"  border="4px solid green" backgroundColor="#07052F" padding="10px"  className='App'> 
      <Box margin="auto" >
           <HomePage  />
        </Box>
    </Box>

  )
}

export default App;

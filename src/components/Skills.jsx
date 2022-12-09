import {Box, Heading, SimpleGrid,Image,Text,CircularProgress,CircularProgressLabel} from '@chakra-ui/react'
const data=[{
    imgURL:'https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png',
    name:'HTML'
},
{
    imgURL:'https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png',
    name:'CSS' 
},
{
    imgURL:'https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png',
    name:'Javascript' 
},
{
    imgURL:'https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png',
    name:'React' 
},
{
    imgURL:'https://manojattri.vercel.app/static/media/redux.1b4bb5fceb01b19da59d.png',
    name:'Redux' 
},
{
    imgURL:'https://manojattri.vercel.app/static/media/tailwind.e47ac876b8d4d0bba47a.png',
    name:'Tailwind' 
},
{
    imgURL:'https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png',
    name:'Chakra UI' 
},
{
    imgURL:'https://manojattri.vercel.app/static/media/typescript.9b1779a2fd3504559e59.png',
    name:'TypeScript' 
},
{
    imgURL:'	https://manojattri.vercel.app/static/media/jest.809768de8350fa5f6a21.png',
    name:'Jest' 
}




]


function Skill(){

    

    return (
        <Box mt='10%' >
        <Heading mb='5%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>Skills</Heading>
        <Heading as='h2' size='xl' color='#F60A68'>Frontend</Heading>
        <SimpleGrid  mt='5%' gap="6" columns={{base:'2',md:'3',lg:'3'}}>
            
         
          
            {
                data.map((el)=>(
                  <Box  m='auto' boxShadow=' #F60A68 5px 5px 5px 5px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;' justifyContent='center' w={{base:'11rem',md:"14rem",lg:'15rem'}} p={{base:'10px 30px',md:'20px 70px'}} h={{base:'10rem' , md:'12rem',lg:''}} gap='4' >
                    <Image  src={el.imgURL} alt={el.name} />
                    <Text color='white'>{el.name}</Text>
                  </Box> 
                ))
            }
        
           
       </SimpleGrid>
           <SimpleGrid mt='7%' columns={{base:'2',md:'4',lg:'4'}} >
            <Box >
           <CircularProgress size='130px' value={75} color='orange.300'>
                    <CircularProgressLabel color='orange.500'>75%</CircularProgressLabel>
            </CircularProgress>
            <Heading as='h4' size='md' color='white'>HTML</Heading>
            </Box>
            <Box>
           <CircularProgress size='130px' value={70} color='skyblue'>
                    <CircularProgressLabel color='skyblue' >70%</CircularProgressLabel>
            </CircularProgress>
            <Heading as='h4' size='md' color='white'>CSS</Heading>
            </Box>
            <Box>
           <CircularProgress size='130px' value={80} color='yellow'>
                    <CircularProgressLabel color='yellow'>80%</CircularProgressLabel>
            </CircularProgress>
            <Heading as='h4' size='md' color='white'>JavaScript</Heading>
            </Box>
            <Box>
           <CircularProgress size='130px' value={80} color='violet'>
                    <CircularProgressLabel color='violet'>80%</CircularProgressLabel>
            </CircularProgress>
            <Heading as='h4' size='md' color='white'>React</Heading>
            </Box>

           </SimpleGrid>

           <Heading as='h2' mt='7%' size='xl' color='#F60A68'>GitHub Calender</Heading>

       </Box>
    )
}

export default Skill
// js https://www.kindpng.com/picc/m/171-1718046_javascript-programming-language-logo-hd-png-download.png

// html https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYGpE-InXMnETp3eLXz7jUn1oJsqtYVj5qzw&usqp=CAU

//css https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png

//react https://as1.ftcdn.net/v2/jpg/03/04/97/12/1000_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg

//redux http://assets.stickpng.com/thumbs/62c536ab3a321dd181302f81.png

// typescript https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png

// cypress https://cdn.sanity.io/images/o0o2tn5x/production/13b9c8412093e2f0cdb5495e1f59144967fa1664-512x512.jpg

// chakra https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwI1DRq3kldow236ny3e_SqLdPOB3wZKAhQ&usqp=CAU

// jest https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png
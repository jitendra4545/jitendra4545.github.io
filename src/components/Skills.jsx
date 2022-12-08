import {Box, Heading, SimpleGrid,Image,Text} from '@chakra-ui/react'


function Skill(){
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

    return (
        <Box mt='10%' >
        <Heading mb='5%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>Skills</Heading>
        <Heading as='h2' size='xl' color='#F60A68'>Frontend</Heading>
        <SimpleGrid mt='5%' gap="10" columns={{base:'2',md:'3',lg:'3'}}>
            
         
          
            {
                data.map((el)=>(
                  <Box justifyContent='center' w='20rem' border='1px solid red' >
                    <Image w='60%' src={el.imgURL} alt={el.name} />
                    <Text>{el.name}</Text>
                  </Box> 
                ))
            }
        
           
       </SimpleGrid>
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
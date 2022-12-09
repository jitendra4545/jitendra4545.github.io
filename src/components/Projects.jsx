import {Box, Heading, SimpleGrid,Text,Image} from '@chakra-ui/react'


function Project(){
    return (
        <Box mt='10%'>
           
           <Heading mb='5%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>PROJECTS</Heading>
           <SimpleGrid column='1' >
                    <Box>
                             <Box>
                                    <Heading as='h2' size='xl' color='#F60A68'>Frontend</Heading>
                                          <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{base:'2xl',md:'2xl',lg:'2xl'}} color='grey' >
                                              Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.
                                          </Text> 
                             </Box>
                             <Box>
                                    <Image src='' />
                             </Box>
                    </Box>
                    <Box>
                             <Box></Box>
                             <Box></Box>
                    </Box>
                    <Box>
                             <Box></Box>
                             <Box></Box>
                    </Box>
                    <Box>
                             <Box></Box>
                             <Box></Box>
                    </Box>
           </SimpleGrid>
        </Box>
    )
}

export default Project


//Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.
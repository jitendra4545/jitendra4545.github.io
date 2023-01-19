import {Box, Heading, Grid,Text,Image, Button,Link} from '@chakra-ui/react'
import { useNavigate} from 'react-router-dom'


function Project(){

    return (
        <Box mt='10%'>

           <Heading mb='5%' color='white' transition='step-start' textAlign='left' as='h2' size='2xl'>PROJECTS</Heading>
           <Grid  p='25px' boxShadow='   skyblue 0px 5px 15px;' gap='7' gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} >
                             <Box>
                                    <Heading textAlign='left' as='h4' size='lg' color='#F60A68'>Urban Company Clone</Heading>
                                          <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{base:'2xl',md:'2xl',lg:'2xl'}} color='grey' >
                                          Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services
                                          </Text>
                                     <Box mt='2%' mb='2%' gap='1' display='flex' w='30px'  >
                                            <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                          
                                     </Box> 
                                    <Box  gap='2' display='flex' m='auto' >
                                        <Box> 
                                        <Link href='https://github.com/hustler-abhi/busy-motion-6100' ><Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>CODE</Button></Link>
                                            </Box>
                                        <Box> 
                                        <Link href={'https://lambent-paprenjak-947e76.netlify.app/'}> <Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>LIVE</Button></Link>
                                            </Box>
                                        
                                        
                                    </Box>
                                    
                             </Box>
                             <Box >
                                    <Image  src='https://i.postimg.cc/xdSmd12V/222.png' />
                             </Box>
                    </Grid>
                   
                   
                    <Grid mt='2%'  p='25px' boxShadow='   skyblue 0px 5px 15px;' gap='7' gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} >
                             <Box>
                                    <Heading  textAlign='left' as='h4' size='lg' color='#F60A68'>Myntra Clone</Heading>
                                          <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{base:'2xl',md:'2xl',lg:'2xl'}} color='grey' >
                                          Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products
                                          </Text>
                                     <Box mt='2%' mb='2%' gap='1' display='flex' w='30px'  >
                                            <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                           
                                            <Image src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png' />
                                     </Box> 
                                    <Box  gap='2' display='flex' m='auto' >
                                        <Box> <Link href='https://github.com/jitendra4545/racial-squirrel-7776'><Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>CODE</Button></Link></Box>
                                        <Box> <Link href='https://jovial-bavarois-3affc5.netlify.app'> <Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>LIVE</Button></Link></Box>
                                        
                                        
                                    </Box>
                                    
                             </Box>
                             <Box >
                                    <Image  src='https://i.postimg.cc/cHgFNJMy/1.png' />
                             </Box>
                    </Grid>
                    <Grid mt='2%' p='25px' boxShadow=' skyblue 0px 5px 15px;' gap='7' gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} >
                             <Box>
                                    <Heading  textAlign='left' as='h4' size='lg' color='#F60A68'>Fathom Health Clone</Heading>
                                          <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{base:'2xl',md:'2xl',lg:'2xl'}} color='grey' >
                                          Fathom develops a coding automation platform designed to expedite medical coding practice
                                         
                                          </Text>
                                     <Box mt='2%' mb='2%' gap='1' display='flex' w='30px'  >
                                            <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                           
                                     </Box> 
                                    <Box  gap='2' display='flex' m='auto' >
                                    <Box> <Link href='https://github.com/jitendra4545/-tedious-advertisement-2369'><Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>CODE</Button></Link></Box>
                                        <Box> <Link href='https://fancy-queijadas-c9c9f4.netlify.app/'> <Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>LIVE</Button></Link></Box>
                                        
                                    </Box>
                                    
                             </Box>
                             <Box >
                                    <Image  src='https://i.postimg.cc/kgS89tLy/11.png' />
                             </Box>
                    </Grid>
                    <Grid mt='2%' p='25px' boxShadow='skyblue 0px 5px 15px;' gap='7' gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} >
                             <Box>
                                    <Heading  textAlign='left' as='h4' size='lg' color='#F60A68'>Cricket.com Clone</Heading>
                                          <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{base:'2xl',md:'2xl',lg:'2xl'}} color='grey' >
                                          Cricket.com provides you with six algorithm-based teams based on your risk appetite, keeping in mind playing conditions, past performances and pitch analysis. 
                                         
                                          </Text>
                                     <Box mt='2%' mb='2%' gap='1' display='flex' w='30px'  >
                                            <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png' />
                                            <Image src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                            
                                     </Box> 
                                    <Box  gap='2' display='flex' m='auto' >
                                    <Box> <Link href='https://github.com/Khajamoinoddin/selective-spark-9795'><Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>CODE</Button></Link></Box>
                                        <Box> <Link href='https://sensational-taffy-8d0af9.netlify.app/'> <Button _hover={{bg:'blue'}} color='white' backgroundColor='#F60A68'>LIVE</Button></Link></Box>
                                        
                                        
                                    </Box>
                                    
                             </Box>
                             <Box >
                                    <Image  src='https://i.postimg.cc/qBm2Gr82/1111.png' />
                             </Box>
                    </Grid>
                    
        </Box>
    )
}

export default Project


//Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.
import { Box, Heading, Grid, Text, Image, Button, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Boat from '../Resume/boat.png'

function Project() {

       return (
              <Box id='project' pt='7%'>

                     <Heading mb='5%' color='blue' transition='step-start' textAlign='left' as='h2' size='2xl'>Projects</Heading>
                    
                     

<Grid _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} borderRadius={'20px'} mt='2%' p='25px' bg="white" boxShadow={`blue 2px 2px 4px 4px`}  gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} gap={7} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Boat Lifestyle Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                   Boat is a consumer electronics startup that brings millennials affordable audio products and accessories

                                   </Text>
                                   <Text color='blue' fontWeight={'bold'} textAlign={'left'} >Tech Stack</Text>
                                   <Box  mt='2%' mb='2%' gap='1' display='flex' w={{base:'75%',md:'50%',lg:'53%'}}  >
                                          <Box w='30%' >
                                          <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>HTML</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image  src='https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>React</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>JS</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>Chakra</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='data:image/png;base64,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' />
                                          <Text mt='3px' fontSize={'12px'} fontWeight={'bold'}>Mongo</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/node.952a9ea986dcfa5229ad.png' />
                                          <Text mt='3px' fontSize={'12px'} fontWeight={'bold'}>Node</Text>
                                          </Box>
                                          
                                   </Box> 

                                   <Box gap='2' display='flex' m='auto' >
                                          <Box> <Link href='https://github.com/jitendra4545/boat-clone' target={'_blank'}><Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>CODE</Button></Link></Box>
                                          <Box> <Link href='https://frontend-jitendra4545.vercel.app/' target={'_blank'}> <Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>LIVE</Button></Link></Box>

                                   </Box>

                            </Box>
                            <Box boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'  >
                                   <Image src={Boat} />
                            </Box>
                     </Grid>
                     <Grid borderRadius={'20px'} _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} mt={{base:"5%",md:"2%",lg:"2%"}} p='25px' boxShadow={`blue 2px 2px 4px 4px`} gap='7' bg="white" gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' mt='2%' color='blue'>Myntra Clone</Heading>
                                   <Text textAlign='left'  lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                          Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products
                                   </Text>
                                   <Text color='blue' fontWeight={'bold'} textAlign={'left'} >Tech Stack</Text>
                                   <Box  mt='2%' mb='2%' gap='1' display='flex' w={{base:'47%',md:'33%',lg:'33%'}}  >
                                          <Box w='30%' >
                                          <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>HTML</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image  src='https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>React</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>JS</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>Chakra</Text>
                                          </Box>
                                   </Box> 

                                          {/* <Image src='https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png' />
                                          <Image src='https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png' /> */}
                                  
                                   <Box gap='2' display='flex' m='auto' >
                                          <Box> <Link href='https://github.com/gaurav62472744/halting-title-3346' target={'_blank'}><Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>CODE</Button></Link></Box>
                                          <Box> <Link href='https://halting-title-3346.vercel.app/' target={'_blank'}> <Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>LIVE</Button></Link></Box>


                                   </Box>

                            </Box>
                            <Box boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'  >
                                   <Image src='https://i.postimg.cc/cHgFNJMy/1.png' />
                            </Box>
                     </Grid>
                     <Grid p='25px' borderRadius={'20px'} _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} boxShadow={`blue 2px 2px 4px 4px`} gap='7' mt={{base:"5%",md:"2%",lg:"2%"}} gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Urban Company Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                          Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services
                                   </Text>
                                   <Text color='blue' fontWeight={'bold'} textAlign={'left'} >Tech Stack</Text>
                                   <Box  mt='2%' mb='2%' gap='1' display='flex' w={{base:'35%',md:'26%',lg:'26%'}}  >
                                          <Box w='30%' >
                                          <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>HTML</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image  src='https://manojattri.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>CSS</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>JS</Text>
                                          </Box>
                                   </Box> 




                                   <Box gap='2' display='flex' m='auto' >
                                          <Box>
                                                 <Link href='https://github.com/hustler-abhi/busy-motion-6100' target={'_blank'} ><Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>CODE</Button></Link>
                                          </Box>
                                          <Box>
                                                 <Link href={'https://lambent-paprenjak-947e76.netlify.app/'} target={'_blank'}> <Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>LIVE</Button></Link>
                                          </Box>


                                   </Box>

                            </Box>
                            <Box boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'  >
                                   <Image src='https://i.postimg.cc/k72vf2YG/222.png' />
                            </Box>
                     </Grid>
                     
                     <Grid _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} borderRadius={'20px'} mt={{base:"5%",md:"2%",lg:"2%"}} p='25px' bg="white" boxShadow={`blue 2px 2px 4px 4px`} gap='7' gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Hubspot.com Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                          HubSpot is a CRM platform that connects everything scaling companies need to deliver a best-in-class customer experience into one place
                                   </Text>
                                   <Text color='blue' fontWeight={'bold'} textAlign={'left'} >Tech Stack</Text>
                                   <Box  mt='2%' mb='2%' gap='1' display='flex' w={{base:'65%',md:'45%',lg:'45%'}}  >
                                          <Box w='30%' >
                                          <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>HTML</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image  src='https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>React</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>JS</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>Chakra</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/redux.1b4bb5fceb01b19da59d.png' />
                                          <Text mt='3px' fontSize={'12px'} fontWeight={'bold'}>Redux</Text>
                                          </Box>
                                   </Box> 

                                          {/* <Image src='https://manojattri.vercel.app/static/media/redux.1b4bb5fceb01b19da59d.png' /> */}
                                  
                                   <Box gap='2' display='flex' m='auto' >
                                          <Box> <Link href='https://github.com/anwarjitme/green-room-4314/tree/main' target={'_blank'}><Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>CODE</Button></Link></Box>
                                          <Box> <Link href='https://subtle-semifreddo-ade928.netlify.app/' target={'_blank'}> <Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>LIVE</Button></Link></Box>


                                   </Box>

                            </Box>
                            <Box boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;' >
                                   <Image src='https://i.postimg.cc/25675Vsd/Hub-Spot.png' />
                            </Box>
                     </Grid>
                      <Grid _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} borderRadius={'20px'} mt={{base:"5%",md:"2%",lg:"2%"}} p='25px' bg="white" boxShadow={`blue 2px 2px 4px 4px`} gap='7' gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Meesho Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                   Meesho is a social commerce platform that enables users to sell products online through social media platforms .

                                   </Text>
                                   <Text color='blue' fontWeight={'bold'} textAlign={'left'} >Tech Stack</Text>
                                   <Box  mt='2%' mb='2%' gap='1' display='flex' w={{base:'75%',md:'50%',lg:'53%'}}  >
                                          <Box w='30%' >
                                          <Image src='https://manojattri.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>HTML</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image  src='https://manojattri.vercel.app/static/media/react.0cf951a69d8e58f83f9d.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>React</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>JS</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/chakra.e4cb472ccaabf22affba.png' />
                                          <Text fontSize={'12px'} fontWeight={'bold'}>Chakra</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='data:image/png;base64,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' />
                                          <Text mt='3px' fontSize={'12px'} fontWeight={'bold'}>Mongo</Text>
                                          </Box>
                                          <Box w='30%'>
                                          <Image   src='https://manojattri.vercel.app/static/media/node.952a9ea986dcfa5229ad.png' />
                                          <Text mt='3px' fontSize={'12px'} fontWeight={'bold'}>Node</Text>
                                          </Box>
                                          
                                   </Box> 

                                   <Box gap='2' display='flex' m='auto' >
                                          <Box> <Link href='https://github.com/mhtbansal11/Meesho-fascino' target={'_blank'}><Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>CODE</Button></Link></Box>
                                          <Box> <Link href='https://meesho-fascino.vercel.app/' target={'_blank'}> <Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>LIVE</Button></Link></Box>

                                   </Box>

                            </Box>
                            <Box boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'  >
                                   <Image src='https://i.postimg.cc/mrwvXgYp/mesho-com.png' />
                            </Box>
                     </Grid> 

              </Box>
       )
}

export default Project
//box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
//Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.
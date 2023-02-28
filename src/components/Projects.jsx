import { Box, Heading, Grid, Text, Image, Button, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


function Project() {

       return (
              <Box id='project' mt='10%'>

                     <Heading mb='5%' color='blue' transition='step-start' textAlign='left' as='h2' size='2xl'>Projects</Heading>
                     <Grid p='25px' borderRadius={'20px'} _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} boxShadow={`blue 2px 2px 4px 4px`} gap='7' gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Urban Company Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                          Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services
                                   </Text>
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


                     <Grid borderRadius={'20px'} _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} mt='2%' p='25px' boxShadow={`blue 2px 2px 4px 4px`} gap='7' bg="white" gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Myntra Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                          Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products
                                   </Text>
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
                     <Grid _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} borderRadius={'20px'} mt='2%' p='25px' bg="white" boxShadow={`blue 2px 2px 4px 4px`} gap='7' gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Fathom Health Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                          Fathom develops a coding automation platform designed to expedite medical coding practice

                                   </Text>
                                   <Box  mt='2%' mb='2%' gap='1' display='flex'  w={{base:'35%',md:'26%',lg:'26%'}}  >
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
                                          <Box> <Link href='https://github.com/jitendra4545/-tedious-advertisement-2369' target={'_blank'}><Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>CODE</Button></Link></Box>
                                          <Box> <Link href='https://fancy-queijadas-c9c9f4.netlify.app/' target={'_blank'}> <Button _hover={{ bg: 'blue' }} color='white' backgroundColor='black'>LIVE</Button></Link></Box>

                                   </Box>

                            </Box>
                            <Box boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'  >
                                   <Image src='https://i.postimg.cc/kgS89tLy/11.png' />
                            </Box>
                     </Grid>
                     <Grid _hover={{boxShadow:'skyblue 2px 2px 4px 4px'}} borderRadius={'20px'} mt='2%' p='25px' bg="white" boxShadow={`blue 2px 2px 4px 4px`} gap='7' gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }} >
                            <Box>
                                   <Heading textAlign='left' as='h4' size='lg' color='blue'>Hubspot.com Clone</Heading>
                                   <Text textAlign='left' mt='2%' lineHeight='30px' fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }} color='grey' >
                                          HubSpot is a CRM platform that connects everything scaling companies need to deliver a best-in-class customer experience into one place
                                   </Text>
                                  
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

              </Box>
       )
}

export default Project
//box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
//Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.
'use-client'
import home from "../index"
import contact from "../contact/page"
import { Box, Button, Container, Flex, Image, SimpleGrid , Menu , MenuButton , MenuList , MenuItem , IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import logo from "../../../public/logo.png" //image ka naam daido jaisay logo aur usko import karo aur wahi src mai likhlo
export default function Page(){
  return(
    <Box boxShadow={"lg"} >
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3,1fr)"> 
        <Box >
          <Image width={"50"} height={"50"} alt="Pana" src="https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo5.ecb63f00.png&w=640&q=75"/>
        </Box>
        <Box display={{ lg: 'initial', base: 'none' }}>
          <Flex  gap={9} color="black" fontWeight={"semibold"} fontSize={18} placeItems="center">
            <Link href={"/"}>Home</Link>
            <Link href={"../syllabus/page"}>Syllabus</Link>
            <Link href={"../explore/page"}>Explore</Link>
            <Link href={"../about/page"}>About</Link>
            <Link href={"../contact/page"}>Contact</Link>
            </Flex>
        </Box>
        <Box display={{ lg: 'initial', base: 'none' }}>
          <Button
          mt='5px'
          colorScheme={"teal"}
          float={"right"}
          >Apply</Button>
        </Box>

        <Box display={{ lg: 'none', base: 'initial' }}>
                        <Menu  >
                            <MenuButton float='right'
                                as={IconButton}
                                aria-label='Options'
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>
                                    Home
                                </MenuItem>
                                <MenuItem>
                                    Syllabus
                                </MenuItem>
                                <MenuItem>
                                    Explore
                                </MenuItem>
                                <MenuItem>
                                    About
                                </MenuItem>
                                <MenuItem>
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
        </SimpleGrid>
      </Container>
    </Box>

  )
}
//import the path of the page in link 
//box kai andar sab code likhtay hain 
//container likhnay sai yeh hota hai kai max size milta hai kai iskai under sab kuch aayi ga  
//flex is basically a square box jismai navigation items rakhna hai
//simple grid is for auto responsiveness 
//template columns ka matlab 3 columns banai gay liken inkai darmiyaan aik ka gap hoga 
//framer motion for moving pictures and objects 

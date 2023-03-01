'use-client'
import { Box, Container, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import logo from "../../../public/logo.png"


export default function footer() {
  return (
    <Box   bg='#0c0c0c'>
        <Container maxW='1400'>
            <Box padding="3">
                <SimpleGrid spacing="30px"  templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
                    <Box > 
                    <Heading py="15px" textColor={"white"} fontSize="medium">ABOUT US</Heading>
                    <Image  width={"50"} height={"50"} alt="Pana" src="https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo5.ecb63f00.png&w=640&q=75"/>                    
                    <Text color={"gray.400"}> The Future of the Web is Web 3.0 , MetaVerse and Edge Computing . PanaVerse DAO is a movement to spread these technologies globally.</Text>
                    </Box>
                    
                    <Box ><Heading py="15px" textColor={"white"} fontSize="medium">USEFUL LINKS</Heading>
                    <SimpleGrid color={"gray.400"} >
                      <Link href={""}>Home</Link>
                      <Link href={""}>Syllabus</Link>
                      <Link href={""}>Explore</Link>
                      <Link href={""}>About</Link>
                      <Link href={""}>Contact</Link>
                    </SimpleGrid>
                    </Box>
                    
                    <Box>
                    <Heading py="15px"textColor={"white"} fontSize="medium">FOLLOW US</Heading>
                    <SimpleGrid color={"gray.400"} >
                      <Link href={""}>Facebook</Link>
                      <Link href={""}>Youtube</Link>
                      <Link href={""}>Twitter</Link>
                      <Link href={""}>LinkedIn</Link>
                      <Link href={""}>Github</Link>
                    </SimpleGrid>
                    </Box>

                    <Box>
                    <Heading py="15px" textColor={"white"} fontSize="medium">CONTACT US</Heading>
                    <SimpleGrid color={"gray.400"} >
                      <Link href={""}>+92 7875895</Link>
                      <Link href={""}>abc@gmail.com</Link>
                      <Link href={""}>Karachi , Pakistan</Link> 
                    </SimpleGrid>
                    </Box>


                </SimpleGrid>

            </Box>
        </Container>
    </Box>
  )
}
//base is for mobile responsiveness lg for laptop
//flexfroggy for flex
import { Box, Button, Container, Flex, Heading, Text ,Avatar , AvatarGroup ,Link} from "@chakra-ui/react";
import Image from "next/image";
import  man  from "../../../public/man.png"
import meta from "../../../public/metaverse.jpg"
import { RevealWrapper } from  'next-reveal'

export default function Banner(){
    return(
        <>
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box bgImage="https://img.freepik.com/free-vector/gradient-purple-hexagonal-background_23-2148965956.jpg?w=2000">
            <Container maxW={1400}>
                <Flex gap={"50px"} padding={"50px"}>
                    <Box flexBasis={"50%"}>
                        <Heading fontWeight={"bold"} fontSize={"5xl"}>Prepare yourself for the next generation of internet with Panaverse </Heading>
                        <Text  mt="20px" mb="20px" fontSize={"lg"} textColor={"blackAlpha.900"} fontWeight="bold" > Earn as you Learn Program . Consolidating Web 3.0 , Metaverse, Artificial Intelligence (AI) , Cloud , Edge , and Ambient Computing/IoT Technologies .</Text>
                        <Button colorScheme={"teal"}>More Info</Button>
                        <Flex alignItems={"center"}>
                        <AvatarGroup size="md" max={3} mt="5">
              <Avatar
                name="Zia Khan"
                src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg"
              />
              <Avatar
                name="Adil Altaf"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
              />
              <Avatar
                name="Owais Ali"
                src="https://chakrademosite-ows-ali.vercel.app/me.jpg"
              />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </Flex>
          </Box>
            <Box flexBasis={"50%"} >
                        <Image
                        
                        alt="meta image"
                        src={meta}
                        />
                    </Box>
               
                </Flex>
                </Container>
                </Box></RevealWrapper>

       
                <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
        <Box>
            <Container maxW={1400}>
                <Flex padding={"50px"}>
                    <Box flexBasis={"50%"}>
                    <Image
                        alt="man image"
                        src={man}
                        />
                    </Box>

                    <Box flexBasis={"50%"}>
                    <Heading>Program of Studies</Heading>
                    <Text mt="20px" mb="20px" fontWeight={"medium"}>This curriculum is intended for beginners who want to learn software development from the ground up . It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each . The emphasis will be on hands-on learning by educating students to produce projects .</Text>
                    <Button colorScheme={"teal"}>Read More</Button>
                    </Box>
                   
                   
                </Flex>





            </Container>

        </Box>
        </RevealWrapper>
        

      
        </>
    )
}
//do box banaigay jismai dono box aapas mai aamnay saamnay hain 
//for animations we should use reveal wrapper . First install it
//wrapper aur list mai yeh diff hai kai wrapper ka aik duration hoga sab comp kai liyae  jab kai list ami diff comp ko alag timings dai saktay hain 
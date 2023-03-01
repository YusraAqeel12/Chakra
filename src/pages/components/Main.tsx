'use-client'
import React from "react"
import { Box, Container, Heading, } from "@chakra-ui/react";


export default function Main( okay:any) {
  return (
    <>
    <Box bgImage={okay.src} py="200px" bgSize={"contain"} bgAttachment="fixed">
        <Container maxW={1400}>

            <Heading
            textColor={"white"}
            size={"2xl"}
            >{okay.title}</Heading>

        </Container>

    </Box>
    </>
  )
}
//main aik structure hai jo ko ham as a prop use karingay .
//main ka structure doosray pages mai same hai .sirf title aur pic diff hai
//bg image hai okay.src and okay ko arg mai paas karo ,okay can be anything 
//ab src ko page .tsx mai call karo
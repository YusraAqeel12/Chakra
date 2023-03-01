'use-client'
import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Main from "../components/Main";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Instructor from '../components/Instructor';
export default function page() {
  return (
    <>
    <Header/>
    <Main src="https://images.unsplash.com/photo-1618419164408-8fe110b99646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"  title="About" />
    <Box margin={"12"}>
      <Container maxW={1400}>
        <Flex>
        <Box flexBasis={"50%"}>
        <Image mx={"auto"} alt="President" src='https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPresident.6b9aa486.png&w=384&q=75'/>
        </Box>
        <Box flexBasis={"50%"}>
        <Heading fontWeight={"semibold"} fontSize="4xl">Dr Arif Alvi</Heading>
        <Text mt={"8"} fontWeight={"medium"} >
        Dr Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018<br/><br/>
        Dr Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.<br/><br/>
        President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
        </Text>
          
        </Box>
        </Flex>

        <Flex>
          <Box flexBasis={"50%"}>
            <Heading fontWeight={"semibold"} fontSize="4xl">Panaverse DAO</Heading>
            <Text mt={"8"} fontWeight={"medium"}>
            Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet <br/><br/>
            President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
            </Text> 
          </Box>

          <Box flexBasis={"50%"}>
            <Image mx={"auto"} alt='Pana' src='https://panaverse-by-ahmed.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo5.ecb63f00.png&w=640&q=75' />
          </Box>



        </Flex>

        <Flex>
        <Box flexBasis={"50%"}>
        <Image mx={"auto"}  alt="Sir Zia" src="data:image/jpeg;base64,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"/>
        </Box>
        <Box flexBasis={"50%"}>
        <Heading fontWeight={"semibold"} fontSize="4xl">Zia Khan</Heading>
        <Text mt={"8"} fontWeight={"medium"} >
        CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.<br/><br/>
        Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.<br/><br/>
        </Text>
          
        </Box>
        </Flex>
        

      </Container>
    </Box>
    <Instructor/>
    <Footer/>
    

    
    </>
    
    
  )
}
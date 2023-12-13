import React from "react";
import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import Login from "../components/Authentication/Login"
import SignUp from "../components/Authentication/SignUp"

function Home(){

    return(
        <Container maxW='xl' centerContent>
            <Box 
            d='flex'
            justifyContent='center'
            p={3}
            bg={'white'}
            w="150%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            >
                <Text 
                fontSize="4xl" 
                fontFamily="Work sans" 
                color="black"
                display="block"
                marginLeft="auto"
                marginRight="auto"
                textAlign="center"

                >
                    Can-Talk
                </Text>
            </Box>
            <Box 
            bg="white" 
            w="300%" 
            p={4} 
            borderRadius="lg" 
            borderWidth="1px" 
            display="block"
            marginLeft="auto"
            marginRight="auto"
             >
            <Tabs variant='soft-rounded'>
                <TabList mb="1em">
                    <Tab width="50%">Login</Tab>
                    <Tab width="50%">Sign Up</Tab>
                </TabList>
                <TabPanels>
                <TabPanel>
                    <Login/>
                </TabPanel>
                <TabPanel>
                    <SignUp/>
                </TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
        </Container>
    )
}

export default Home
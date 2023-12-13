import React, { useState} from "react";
import {FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button} from "@chakra-ui/react"

function Login(){
    const [show, setsShow] = useState(false)
    const [name, setName]= useState()
    const [email, setEmail] = useState()
    const [password, setPassword]= useState()

    function handleClick(){
        setsShow(!show)
    }

    function handleSubmit(){

    }

    return(
    <VStack spacing="5px" color="black">
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
                <Input
                placeholder="Enter your name"
                onChange={(e)=>setName(e.target.value)}
                />
        </FormControl>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
                <Input
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
                />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                type={show?"text":"password"}
                placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show?"Hide":"Show"}
                </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button 
        colorScheme="blue"
        width="30%"
        style={{marginTop:15}}
        onClick={handleSubmit}
        >
            Login
        </Button>
        <Button 
        colorScheme="red"
        width="30%"
        variant="solid"
        onClick={()=>{
            setEmail("guest@example.com");
            setPassword("12345")
        }}
        >
            Enter as Guest
        </Button>
    </VStack>)
}

export default Login
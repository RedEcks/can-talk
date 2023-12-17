import React, { useState} from "react";
import {FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, useToast} from "@chakra-ui/react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [show, setsShow] = useState(false)
    const [name, setName]= useState()
    const [email, setEmail] = useState()
    const [password, setPassword]= useState()
    const [loading, setLoading]= useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    function handleClick(){
        setsShow(!show)
    }

    const handleSubmit = async() =>{
        setLoading(true)
        if(!email || !password){
            toast({
                title: 'Please fill all the fields.',
                description: "Have not filled out all fields.",
                status: 'Warning',
                duration: 5000,
                isClosable: true,
            })
            setLoading(false)
            return
        }
        try{
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            }
            const { data } = await axios.post(
                "/api/user/login",
                { email, password },
                config
            )
            toast({
                title: 'Login Successful.',
                description: "Login Successful.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)
            navigate("/chats")
        } catch(error){
            toast({
                title: 'Error Occured.',
                description: error.response.data.message,
                status: 'Warning',
                duration: 5000,
                isClosable: true,
            })
            setLoading(false)
        }
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
                value={email}
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
                value={password}
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
        isLoading={loading}
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
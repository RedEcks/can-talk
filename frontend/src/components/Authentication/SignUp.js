import React, {useState} from "react";
import {FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, Toast, useToast} from "@chakra-ui/react"
import axios from "axios"


function SignUp(){
    const [show, setsShow] = useState(false)
    const [name, setName]= useState()
    const [email, setEmail] = useState()
    const [password, setPassword]= useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic]= useState()
    const [loading, setLoading]= useState(false)
    const toast = useToast()

    function handleClick(){
        setsShow(!show)
    }

    function postDetails(pics){
        setLoading(true)
        if (pics===undefined){
            toast({
                title: 'Please Select an Image.',
                description: "Have not selected an image.",
                status: 'Warning',
                duration: 5000,
                isClosable: true,
              })
            return
        }
        if(pics.type==="image/jpeg" || pics.type==="image/png"){
            const data = new FormData()
            data.append("file", pics)
            data.append("upload_preset", "can-talk")
            data.append("cloud_name", "dos0ketul")
            fetch("https://api.cloudinary.com/v1_1/dos0ketul/image/upload",{
                method: "post",
                body: data,
            })
            .then((res)=> res.json())
            .then((data)=>{
                setPic(data.url.toString())
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err)
                setLoading(false)
            }) 
        }else{
            toast({
                title: 'Please Select an Image.',
                description: "Have not selected an image.",
                status: 'Warning',
                duration: 5000,
                isClosable: true,
            })
            setLoading(false)
            return
        }
        
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
        <FormControl id='confirm-password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input
                type={show?"text":"password"}
                placeholder="Confirm password"
                onChange={(e)=>setConfirmpassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show?"Hide":"Show"}
                </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='pic' isRequired>
            <FormLabel>Upload your Picture</FormLabel>
                <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={(e)=>postDetails(e.target.files[0])}
                />
        </FormControl>
        <Button 
        colorScheme="blue"
        width="30%"
        style={{marginTop:15}}
        onClick={handleSubmit}
        isLoading={loading}
        >
            Sign Up
        </Button>
    </VStack>)
}

export default SignUp
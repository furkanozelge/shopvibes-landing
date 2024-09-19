import React, { useState } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text, Input, Button, Checkbox, CheckboxGroup, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      privacyPolicy: false,
    });
  
    const handleChange = (e) => {
      const { id, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8080/api/auth/register', formData, {
          withCredentials: true, // kimlik bilgilerini taşımak için
          headers: {
            'Content-Type': 'application/json', 
          },
        });
        
        if (response.status === 200) {

            const { token, user } = response.data;
          
          localStorage.setItem('token', token); 
          localStorage.setItem('isRegistered', 'true'); 
          navigate('/panel'); 
        }
  
        console.log(response.data);
      } catch (error) {
        console.error('There was an error!', error);
        alert('Registration failed. Please try again.');
      }
    };
  
    
  return (
    <Flex height="100vh">
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={6}
      >
        <Heading size={3} color={"black"} mb={0}>Get Started</Heading>
        <Text mb={4} p={2} maxW={650}>
          Use this form to open up your shopvibes account. You can also reach us anytime via hello@shop-vibes.de
        </Text>

        <FormControl mb={5} width="50%">
          <FormLabel htmlFor="firstName" color="black">First name*</FormLabel>
          <Input
            id="firstName"
            placeholder="Your first name*"
            variant="outline"
            size="lg"
            borderRadius="8px"
            borderColor="#ccc"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={5} width="50%">
          <FormLabel htmlFor="lastName" color="black">Last name*</FormLabel>
          <Input
            id="lastName"
            placeholder="Your last name*"
            variant="outline"
            size="lg"
            borderRadius="8px"
            borderColor="#ccc"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={5} width="50%">
          <FormLabel htmlFor="email" color="black">Email*</FormLabel>
          <Input
            id="email"
            placeholder="you@company.com*"
            variant="outline"
            size="lg"
            borderRadius="8px"
            borderColor="#ccc"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={5} width="50%">
          <FormLabel htmlFor="company" color="black">Company*</FormLabel>
          <Input
            id="company"
            placeholder="You GmbH*"
            variant="outline"
            size="lg"
            borderRadius="8px"
            borderColor="#ccc"
            value={formData.company}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={5} width="50%">
          <FormLabel htmlFor="phone" color="black">Phone number*</FormLabel>
          <Input
            id="phone"
            placeholder="+0157 99999999*"
            variant="outline"
            size="lg"
            borderRadius="8px"
            borderColor="#ccc"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>

        <CheckboxGroup>
          <Checkbox
            id="privacyPolicy"
            size={"lg"}
            colorScheme="blue"
            mb={4}
            isChecked={formData.privacyPolicy}
            onChange={handleChange}
          >
            You agree to our friendly privacy policy.
          </Checkbox>
        </CheckboxGroup>

        <Button
          color="white"
          bg="#1C3DDA"
          width="50%"
          height="6%"
          borderRadius="40px"
          _hover={{ bg: "#0F2BA6" }}
          onClick={handleSubmit}
        >
          Get Started
        </Button>
      </Box>

      <Box
        flex="1"
        bgImage="url('https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64d0d1449b8373554a4ea438_getstarted_banner-2.svg')"
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPos="center"
      />
    </Flex>
  );
};

export default GetStarted;

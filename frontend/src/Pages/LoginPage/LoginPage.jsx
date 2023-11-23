import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {

    const loginData = { username, password };

    axios
      .post('/auth/login', loginData) // Adjust the API endpoint
      .then((response) => {
        // Handle a successful login response
        setLoginMessage(response.data.message);
      })
      .catch((error) => {
        // Handle login error
        setLoginMessage(error.response.data.message);
      });
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          borderWidth={1}
          borderRadius="lg"
          p={8}
          width={{ base: '100%', md: '400px' }}
        >
          <VStack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button colorScheme="blue" onClick={handleLogin}>
              Log In
            </Button>

            <p>{loginMessage}</p>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default LoginPage;
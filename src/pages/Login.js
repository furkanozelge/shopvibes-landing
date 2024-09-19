import { Box, Flex, Image, Heading, Text, Input, Button } from "@chakra-ui/react";

function Login() {
  return (
    <Flex height="100vh">
      
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={20}
        backgroundColor="white"
      >
        <Image src="https://app.shop-vibes.de/favicon.svg" alt="Logo" boxSize="30px" mb={3} />
        <Heading as="h2" size="lg" marginBottom={10}>Welcome Back!</Heading>
        <Input w={60} placeholder="Email" variant="outline" marginBottom={4} />
        <Input w={60} placeholder="Password" variant="outline" marginBottom={4} type="password" />
        <Button _hover={{ bg: "#1D3CDA" }} color={"white"} bg="#1D3CDA" width="20%" marginBottom={4}>Submit</Button>
        <Text color="gray.500" fontSize="sm">
          Forgot your password?
        </Text>
      </Box>
      <Box
        flex="1"
        backgroundImage="url('https://app.shop-vibes.de/background_login.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
      />
    </Flex>
  );
}

export default Login;

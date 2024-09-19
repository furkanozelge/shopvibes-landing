import { Box, Button, Heading, Stack, Text, Image, Flex, HStack } from "@chakra-ui/react";
import background from "../../public/hero-background.png"
function HeroSection() {
  return (
    <Box
      bgImage="url('/hero-background.jpg')"
      bgSize="cover"
      bgPos="center"
      h="60vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      p={10}
      position="relative" 
    >
      <Stack spacing={5} textAlign="left" maxW="xl">
        <Heading  fontSize="5xl" mb={-5} color="#1C3DDA">Bye Bye Excel</Heading>
        <Heading fontSize="5xl" color="#1C3DDA">Hello automated listings</Heading>
        <Text fontSize="lg" color="black">
          Say goodbye to the hassle of data management and exchange, and hello to quality-checked product data and automated data sharing.
          A best-practice PIM, advanced analytics, and AI content generation - combined to support you in all things product data.
        </Text>
        <HStack>
        <Button _hover={{ bg: "#1D3CDA" }} borderRadius={10} p={8} size="lg" color={"white"} background={"#1C3DDA"}>Request Demo</Button>
        <Button ml={5} borderRadius={10} p={8} size="lg" color={"black"} _hover={{ bg: "#1C3DDA", color: "white" }} bg={"white"}>Learn More</Button>
        </HStack>
      </Stack>
      <Image
        src={background}
        alt="Illustration"
        boxSize="300px"
        borderRadius="md"
        ml={10}
      />
       
    </Box>
  );
}

export default HeroSection;

import { Box, Heading, SimpleGrid, Text, Button, Image } from "@chakra-ui/react";

function KeyFeatures() {
  return (
    <Box py={10} px={500} textAlign="center">
      <Heading size="md" color={"#1D3CDA"} mb={2}>Do more with less. like way less.</Heading>
      <Heading mb={6}>Our users enjoy a clear ROI.</Heading>

      <SimpleGrid columns={[1, 3]} spacing={10} justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <FeatureCard
            iconUrl="https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f651_euro-iso-color.svg"
            title="Sell everywhere"
            description="It's more important then ever to sell products on different platforms and retailers to maximize exposure to potential customers. We help you expand effortlessly."
          />
          <Button color={"#1D3CDA"} _hover={{ bg: "white" }} mt={4}>Learn More</Button>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <FeatureCard
            iconUrl="https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f652_flag-iso-color.svg"
            title="Save 50 hours per month"
            description="shopvibes saves you up to 90% of your time to list a new product. Get in touch to learn how much time you could save by working with shopvibes."
          />
          <Button color={"#1D3CDA"} _hover={{ bg: "white" }} mt={4}>Learn More</Button>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <FeatureCard
            iconUrl="https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f653_rocket-iso-color.svg"
            title="List in hours, not days"
            description="No matter the channel - we help you drastically reduce your time to listing."
          />
          <Button color={"#1D3CDA"} _hover={{ bg: "white" }} mt={4}>Learn More</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

function FeatureCard({ iconUrl, title, description }) {
  return (
    <Box textAlign="left" p={5} borderWidth={1} borderRadius="lg" width="100%" maxW="400px">
      <Box textAlign="center" mb={4}>
        <Image src={iconUrl} alt={title} boxSize={10} />
      </Box>
      <Heading size="md" mb={2}>{title}</Heading>
      <Text>{description}</Text>
    </Box>
  );
}

export default KeyFeatures;

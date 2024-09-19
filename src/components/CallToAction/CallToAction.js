import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function CallToAction() {
  return (
    <Box textAlign="center" py={10}>
      <Heading size={"md"} color="#1D3CDA" mb={6}>
        shopvibes by the numbers
      </Heading>

      <Flex
        maxW="1400px"
        mx="auto"
        justifyContent="space-between"
        wrap="wrap"
        px={5}
      >

        <Box textAlign="center" flex="1" mx={2}>
          <Heading fontSize="5xl">
            +150<span style={{ color: 'purple' }}>K</span>
          </Heading>
          <Text fontSize={"large"} fontWeight="bold" mt={2}>
            SKU's connected to retailers
          </Text>
          <Text mt={1}>
            We manage over 150,000 products for our customers
          </Text>
        </Box>


        <Box textAlign="center" flex="1" mx={2}>
          <Heading fontSize="5xl">
            +2.5<span style={{ color: '#0A3BFF' }}>M</span>
          </Heading>
          <Text fontSize={"large"} fontWeight="bold" mt={2}>
            Optimized data points
          </Text>
          <Text mt={1}>
            Our customers optimize over 2.5 million data points daily
          </Text>
        </Box>


        <Box textAlign="center" flex="1" mx={2}>
          <Heading fontSize="5xl">
            +20<span style={{ color: 'green' }}>K</span>
          </Heading>
          <Text fontSize={"large"} fontWeight="bold" mt={2}>
            Descriptions generated
          </Text>
          <Text mt={1}>
            Our users generated over 10,000 product descriptions via our AI tools
          </Text>
        </Box>


        <Box textAlign="center" flex="1" mx={2}>
          <Heading fontSize="5xl" color="black">
            50<span style={{ color: 'red' }}>+</span>
          </Heading>
          <Text fontSize={"large"} fontWeight="bold" mt={2}>
            Connected Retailers worldwide
          </Text>
          <Text mt={1}>
            We've connected our customers to over 30 retailers worldwide and are steadily expanding
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default CallToAction;

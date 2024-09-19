import { Box, Text, Stack, Button } from "@chakra-ui/react";

function Promotion() {
  return (
    <Box bg="#1D3CDA" color="white" py={23} textAlign="center">
      <Stack direction={["column", "row"]} justify="center" align="center" spacing={3}>
        <Text textAlign="center">
          We're happy to announce our Pre-Seed funding round. Read all about it: &nbsp;
        </Text>
        <Button size="xs" color="#1D3CDA" bg="white">
          Learn More
        </Button>
      </Stack>
    </Box>
  );
}

export default Promotion;

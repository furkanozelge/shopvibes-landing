import { Box, Text, Stack, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="white" color="gray" py={6} textAlign="center">
      <Stack align={"center"} spacing={3}>
        <Text>&copy; {new Date().getFullYear()} ShopVibes. All rights reserved.</Text>

      </Stack>
    </Box>
  );
}

export default Footer;

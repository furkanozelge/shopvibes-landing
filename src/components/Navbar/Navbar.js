import { Box, Flex, HStack, Link, Button, Image, Menu, MenuButton, MenuList, MenuItem, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <Box bg="white" color="grey">
      <Flex maxW="1400px" mx="auto" px={20} py={0} alignItems="center" justifyContent="space-between">
        <HStack p={0} m={0}>
          <Link href="/" onMouseEnter={() => setIsLogoHovered(true)} onMouseLeave={() => setIsLogoHovered(false)}>
            <Image 
              src="https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f645_LOGO_SHOPVIBES.svg" 
              alt="logo" 
              boxSize="200px" 
              transition="transform 0.2s"
              transform={isLogoHovered ? "scale(1.1)" : "scale(1)"}
            />
          </Link>
        </HStack>
        
        <HStack spacing={8}>
          <Menu>
            <MenuButton
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              display="flex"
              alignItems="center"
              fontSize={"large"}
            >
              Solution <Icon as={ChevronDownIcon} ml={2} transform={isHovered ? "rotate(180deg)" : "rotate(0deg)"} transition="transform 0.2s" />
            </MenuButton>
            <MenuList>
              <MenuItem>Back Office</MenuItem>
              <MenuItem>Key Account</MenuItem>
              <MenuItem>Management</MenuItem>
            </MenuList>
          </Menu>
          
          <Menu>
            <MenuButton
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              display="flex"
              alignItems="center"
              fontSize={"large"}
            >
              Product <Icon as={ChevronDownIcon} ml={2} transform={isHovered ? "rotate(180deg)" : "rotate(0deg)"} transition="transform 0.2s" />
            </MenuButton>
            <MenuList>
              <MenuItem>Data Management</MenuItem>
              <MenuItem>Data Quality</MenuItem>
              <MenuItem>One-Click-Distribution</MenuItem>
              <MenuItem>Analytics</MenuItem>
              <MenuItem>AI Enhancement</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              display="flex"
              alignItems="center"
              fontSize={"large"}
            >
              Resources <Icon as={ChevronDownIcon} ml={2} transform={isHovered ? "rotate(180deg)" : "rotate(0deg)"} transition="transform 0.2s" />
            </MenuButton>
            <MenuList>
              <MenuItem>Blog & Case Studies</MenuItem>
              <MenuItem>Our Partners</MenuItem>
              <MenuItem>Frequently Asked Questions</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
          <MenuButton
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              display="flex"
              alignItems="center"
              fontSize={"large"}
            >
              About 
            </MenuButton>
          </Menu>
        </HStack>

        <HStack spacing={4}>
          <Link href="/login">
            <Button color="black" bg="white" _hover={{ bg: "#f1f1f1" }}>Login</Button>
          </Link>
          <Link href="/get-started">
            <Button color="white" bg="#1C3DDA" _hover={{ bg: "#0F2BA6" }}>Start Now</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;

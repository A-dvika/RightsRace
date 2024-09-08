import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // For linking to routes

const Navbar = () => {
  return (
    <Box bg="darkestShade" color="lighterShade" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* App title */}
        <Text fontSize="xl" fontWeight="bold" fontFamily="cursive">
          Rights Race
        </Text>

        {/* Navbar Links */}
       
      </Flex>
    </Box>
  );
};

export default Navbar;

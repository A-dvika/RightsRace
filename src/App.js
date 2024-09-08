import { ChakraProvider, Box, Flex, Heading, Link, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { FaRegComment, FaUsers, FaHandshake, FaBalanceScale, FaHeart, FaBook, FaChurch, FaHome, FaClinicMedical } from "react-icons/fa"; // Import relevant icons
import theme from "./theme";
import { useState } from "react";

const freedoms = [
  { name: "Freedom of Speech and Expression", icon: FaRegComment },
  { name: "Freedom of Assembly", icon: FaUsers },
  { name: "Freedom of Association", icon: FaHandshake },
  { name: "Right to Life and Liberty", icon: FaHeart },
  { name: "Right to Equality", icon: FaBalanceScale },
  { name: "Right to Freedom of Religion", icon: FaChurch },
  { name: "Right to Property", icon: FaHome },
  { name: "Right to Education", icon: FaBook },
  { name: "Right to Health", icon: FaClinicMedical },
];

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <ChakraProvider theme={theme}>
      <Box bg="lighterShade" minHeight="100vh">
        {/* Navbar */}
        <Flex as="nav" bg="darkerShade" py={4} px={10} justifyContent="space-between" alignItems="center" mb={10}>
          {/* Logo */}
          <Heading as="h1" size="lg" color="lighterShade" fontFamily="heading">
            Rights Race
          </Heading>

          {/* Navigation Links */}
          <Flex gap={8}>
            <Link href="#home" color="lighterShade" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
              Home
            </Link>
            <Link href="#freedoms" color="lighterShade" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
              Freedoms
            </Link>
            <Link href="#about" color="lighterShade" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
              About
            </Link>
          </Flex>
        </Flex>

        {/* Cards Section */}
        <Box id="freedoms" p={5}>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {freedoms.map((freedom, index) => (
              <Box
                key={index}
                bg="darkerShade"
                color="white"
                height="150px"
                borderRadius="md"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                transition="transform 0.3s ease, background-color 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  backgroundColor: "darkestShade",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {/* Icon */}
                <Icon as={freedom.icon} boxSize={8} mb={3} />
                {/* Freedom Name */}
                <Text fontSize="md" fontWeight="bold" textAlign="center">
                  {freedom.name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

import { SimpleGrid, Box, Text, Icon } from "@chakra-ui/react";
import { FaBalanceScale, FaHeart, FaBook, FaHome, FaClinicMedical, FaUtensils, FaWater, FaBuilding, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const rights = [
  { name: "Right to Equality", icon: FaBalanceScale, route: "/right-to-equality" },
  { name: "Right to Life and Liberty", icon: FaHeart, route: "/right-to-life" },
  { name: "Right to Education", icon: FaBook, route: "/right-to-education" },
  { name: "Right to Property", icon: FaHome, route: "/right-to-property" },
  { name: "Right to Health", icon: FaClinicMedical, route: "/right-to-health" },
  { name: "Right to Food", icon: FaUtensils, route: "/right-to-food" },
  { name: "Right to Water", icon: FaWater, route: "/right-to-water" },
  { name: "Right to Shelter", icon: FaBuilding, route: "/right-to-shelter" },
  { name: "Right to Information", icon: FaInfoCircle, route: "/right-to-information" }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={10} p={5}>
      {rights.map((right, index) => (
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
            cursor: "pointer"
          }}
          onClick={() => navigate(right.route)} // Navigate to respective page
        >
          {/* Icon for each right */}
          <Icon as={right.icon} boxSize={8} mb={3} />
          {/* Name of the right */}
          <Text fontSize="md" fontWeight="bold" textAlign="center">
            {right.name}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Home;

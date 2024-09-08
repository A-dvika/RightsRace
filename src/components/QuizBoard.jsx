import { Box, Text, Heading, VStack, Button, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import { useState } from "react";

const QuizBoard = ({ questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showSolution, setShowSolution] = useState(false);

  const handleSubmit = () => {
    setShowSolution(true);
  };

  return (
    <Box
      bg="darkestShade"
      borderRadius="md"
      borderWidth="10px"
      borderColor="darkerShade"
      p={8}
      maxWidth="800px"
      mx="auto"
      mt={10}
      color="white"
    >
      <VStack spacing={5} align="start">
        <Heading size="lg">{questionData.title}</Heading>
        <Text>{questionData.scenario}</Text>
        <Text fontWeight="bold">Clues:</Text>
        <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer}>
          <Stack spacing={3}>
            {questionData.clues.map((clue, index) => (
              <Radio key={index} value={clue}>
                {clue}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        <Button colorScheme="teal" onClick={handleSubmit}>Submit Answer</Button>

        {showSolution && (
          <Box mt={5} bg="gray.700" p={4} borderRadius="md">
            <Text fontWeight="bold">Correct Answer:</Text>
            <Text>{questionData.correctAnswer}</Text>
            <Text mt={3}>Solution:</Text>
            <Text>{questionData.solution}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default QuizBoard;

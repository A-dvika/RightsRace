import React, { useState } from "react";
import { Box, Text, Button, Flex, VStack, Alert, AlertIcon } from "@chakra-ui/react";

const QuizBoard = ({ questionData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  if (!questionData || questionData.length === 0) {
    return <Text color="white">No questions available.</Text>;
  }

  const question = questionData[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === question.correctAnswer);
    setShowSolution(true);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowSolution(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Box
      bg="#342A22" // Darkest shade for the board
      p={5}
      borderRadius="md"
      boxShadow="lg"
      maxW="1000px"
      mx="auto"
      mt={10}
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold" color="white">
          {question.title}
        </Text>
        <Text color="white">{question.scenario}</Text>
        <VStack spacing={2} align="stretch">
          {question.clues.map((clue, index) => (
            <Button
              key={index}
              colorScheme="teal"
              variant="outline"
              onClick={() => handleAnswerSelect(clue)}
              _hover={{ bg: "#5C3A1E", color: "white" }} // Darker shade on hover
              _focus={{ boxShadow: "none" }} // Remove default focus box-shadow
            >
              {clue}
            </Button>
          ))}
        </VStack>
        {showSolution && (
          <Alert status={isCorrect ? "success" : "error"} variant="subtle">
            <AlertIcon />
            {isCorrect ? "Correct! " : "Incorrect! "} {question.solution}
          </Alert>
        )}
        {currentQuestionIndex < questionData.length - 1 && (
          <Button colorScheme="teal" onClick={nextQuestion} mt={4}>
            Next Question
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default QuizBoard;

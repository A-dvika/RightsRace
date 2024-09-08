import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QuizBoard from "../components/QuizBoard";

const RightToEquality = () => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    // Fetch the quiz questions from the JSON file
    fetch("RightToEquality/questions.json")
      .then((response) => response.json())
      .then((data) => setQuestionData(data));
  }, []);

  if (!questionData) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box bg="#E6DFD5" minHeight="100vh" p={5}>
      <QuizBoard questionData={questionData} />
    </Box>
  );
};

export default RightToEquality;

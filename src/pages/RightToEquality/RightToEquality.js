import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QuizBoard from "../../components/QuizBoard";

const RightToEquality = () => {
  const [questionData, setQuestionData] = useState(null);

  useEffect(() => {
    // Fetch the quiz question from the JSON file
    fetch("/pages/RightToEquality/question.json")
      .then((response) => response.json())
      .then((data) => setQuestionData(data));
  }, []);

  if (!questionData) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box bg="lighterShade" minHeight="100vh" p={5}>
      <QuizBoard questionData={questionData} />
    </Box>
  );
};

export default RightToEquality;

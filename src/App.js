import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import Home from "./Home";
import Navbar from "./components/Navbar";
import RightToEquality from "./pages/RightToEquality/RightToEquality"; // Example page
// Import other pages similarly

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        
        <Box bg="lighterShade" minHeight="100vh">
          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/right-to-equality" element={<RightToEquality />} />
            
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;

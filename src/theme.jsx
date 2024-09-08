import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    lighterShade: "#E6DFD5",
    darkerShade: "#5C3A1E",
    darkestShade: "#342A22",
  },
  fonts: {
    heading: `'Cursive', sans-serif`,
  },
});

export default theme;

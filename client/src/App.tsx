import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;

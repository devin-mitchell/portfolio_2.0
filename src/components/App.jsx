import { useState } from "react";

import { VStack } from "@chakra-ui/react";

import Home from "./Home";
import BgGrid from "./BgGrid";

function App() {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <VStack
      className="App"
      position="relative"
      justifyContent="center"
      alignItems="center"
      bg="blackAlpha.900"
      spacing={0}
      overflowX="hidden"
    >
      {!isFinished && <BgGrid setIsFinished={setIsFinished} />}
      {isFinished && <Home />}
    </VStack>
  );
}

export default App;

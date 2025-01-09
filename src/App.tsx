import { useRef, useState } from "react";
import reactLogo from "#/assets/react.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import HeartIcon from "#/components/HeartIcon";
import HighLight from "#/components/HightLight";
import NewBox from "#/components/NewBox";
import { Text } from "#/components/Text";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <div className="App">
      <div className="flex justify-center">
        <Text as="a" href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </Text>
        <Text as="a" href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Text>
      </div>
      <Text as="h1" color="orange" ref={ref} className="flex justify-center">
        Vite + React
        <Text
          as={HeartIcon}
          style={{
            marginLeft: "0.5rem",
          }}
        />
      </Text>

      <div className="card">
        <Text as="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Text>
        <br />
        <br />
        <NewBox
          as="button"
          rounded="md"
          bg="tomato"
          color="white"
          px={4}
          h={12}
        >
          Button
        </NewBox>
        <br />
        <br />
        <Box
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          px={4}
          h={12}
        >
          Button 1
        </Box>
        <br />
        <Text as="p">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
        <Text as={HighLight} className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Text>
      </div>
    </div>
  );
}

export default App;

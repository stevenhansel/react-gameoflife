import React, { useCallback, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/core";

import Layout from "./components/Layout";
import GameOfLife from "./components/GameOfLife";
import PatternSelector from "./components/PatternSelector";
import { useTransition, animated } from "react-spring";
import TransitionWrapper from "./components/TransitionWrapper";
import { useAutomata } from "./hooks/useAutomata";
import { NUM_COLS, NUM_ROWS } from "./globals";

const pages = [
  ({ style }: any) => (
    <animated.div style={{ ...style }}>
      <TransitionWrapper>
        <GameOfLife />
      </TransitionWrapper>
    </animated.div>
  ),
  ({ style }: any) => (
    <animated.div style={{ ...style }}>
      <TransitionWrapper>
        <PatternSelector />
      </TransitionWrapper>
    </animated.div>
  ),
];

const Home: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const transitions = useTransition(index, (page) => page, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  const handleTransitionChange = useCallback(
    () => setIndex((index) => (index + 1) % 2),
    []
  );

  return (
    <Layout>
      <Heading fontSize={48}>Game of Life</Heading>
      <Box>
        <Button onClick={handleTransitionChange}>
          {index === 0 ? "Check out Patterns" : "Simulate Cells!"}
        </Button>
        <Box position="relative">
          <Box width="100%">
            {transitions.map(({ item, props, key }) => {
              const Page = pages[item];
              return <Page key={key} style={props} />;
            })}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;

import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/core";

import Layout from "./components/Layout";
import GameOfLife from "./components/GameOfLife";
import PatternSelector from "./components/PatternSelector";
import { useTransition, animated } from "react-spring";
import TransitionWrapper from "./components/TransitionWrapper";

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
    from: { opacity: 0, transform: "translate3d(50%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  const handleTransitionChange = useCallback(
    () => setIndex((index) => (index + 1) % 2),
    []
  );

  return (
    <Layout>
      <Box display="flex" flexDirection={["column", "row"]}>
        <Box width={["100%", "60%"]}>
          <Heading fontSize={["5xl"]}>Conway's Game of Life</Heading>
          <Button
            variant="solid"
            variantColor="red"
            size="lg"
            mt={[4, 6]}
            ml={2}
            onClick={handleTransitionChange}
          >
            {index === 0 ? "Patterns!" : "Simulate Cells!"}
          </Button>
          <Box color="gray.700" mt={[8, 12]}>
            <Text>
              Game of Life is{" "}
              <Link
                color="red.500"
                href="https://en.wikipedia.org/wiki/Cellular_automaton"
              >
                a cellular automaton
              </Link>{" "}
              which was devised by John Horton Conway in 1970. You can interact
              with the board by configurating your own initial cell
              configurations or just randomize the board itself and then
              simulate by clicking the start button.
            </Text>
            <Text>
              There also exists many different types of patterns which are
              classified according to their behaviour. Those pattern types are:
              Still Lifes, Oscillators and Spaceships.
            </Text>
            <Box mt={8}>
              <Heading fontSize="xl">Rules:</Heading>
              <Text mt={2}>
                There are possible states between each cell,{" "}
                <Text display="inline-block" fontWeight="600">
                  live
                </Text>{" "}
                or{" "}
                <Text display="inline-block" fontWeight="600">
                  dead
                </Text>
                . Every cell interacts with it's eight neighbours, which
                interaction will follow these three major rules:
              </Text>
              <List as="ol" styleType="decimal" mt={2}>
                <ListItem>
                  Any live cell with two or three live neighbours survives.
                </ListItem>
                <ListItem>
                  Any dead cell with three live neighbours becomes a live cell.
                </ListItem>
                <ListItem>
                  All other live cells die in the next generation. Similarly,
                  all other dead cells stay dead.
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
        <Box position="relative" width="100%">
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item];
            return <Page key={key} style={props} />;
          })}
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;

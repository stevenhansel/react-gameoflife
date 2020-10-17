import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/core";

import Sidebar from "./Sidebar";
import Pattern from "./Pattern";

export enum Category {
  StillLifes = "StillLifes",
  Oscillators = "Oscillators",
  Spaceships = "Spaceships",
}

const exampleBoatStructure = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

const exampleToadStructure = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

const PatternSelector: React.FC = () => {
  const [patterns, setPatterns] = useState([]);

  return (
    <Sidebar>
      <Heading fontSize={24}>Patterns</Heading>
      <Box>
        <Pattern title="Beehive" structure={exampleBoatStructure} />
        <Pattern title="Toad" structure={exampleToadStructure} />
      </Box>
    </Sidebar>
  );
};

export default PatternSelector;

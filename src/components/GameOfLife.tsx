import React from "react";

import { Box, Button } from "@chakra-ui/core";
import Grid from "./Grid";
import { CELL_SIZE, NUM_COLS, NUM_ROWS } from "../globals";
import { useAutomata } from "../hooks/useAutomata";

const GameOfLife: React.FC = () => {
  const {
    grid,
    startSimulation,
    isRunning,
    resetSimulation,
    generateRandomGrid,
    updateGrid,
  } = useAutomata(Array.from(Array(NUM_ROWS), () => Array(NUM_COLS).fill(0)));

  return (
    <Box color="gray.800">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="40%"
      >
        <Button
          onClick={startSimulation}
          variant="ghost"
          variantColor="red"
          size="md"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button
          onClick={resetSimulation}
          variant="ghost"
          variantColor="red"
          size="md"
        >
          Clear
        </Button>
        <Button
          onClick={generateRandomGrid}
          variant="ghost"
          variantColor="red"
          size="md"
        >
          Randomize
        </Button>
      </Box>

      <Grid cells={grid} cellSize={CELL_SIZE} updateGrid={updateGrid} />
    </Box>
  );
};
export default GameOfLife;

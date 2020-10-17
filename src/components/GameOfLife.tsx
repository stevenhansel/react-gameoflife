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
    <Box>
      <Button onClick={startSimulation}>{isRunning ? "Stop" : "Start"}</Button>
      <Button onClick={resetSimulation}>Clear</Button>
      <Button onClick={generateRandomGrid}>Randomize</Button>
      <Grid cells={grid} cellSize={CELL_SIZE} updateGrid={updateGrid} />
    </Box>
  );
};
export default GameOfLife;

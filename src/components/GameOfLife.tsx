import React, { useCallback, useRef, useState } from "react";

import { Box, Button } from "@chakra-ui/core";
import produce from "immer";
import Cell from "./Cell";
import Grid from "./Grid";
import {
  automataOperations,
  CELL_SIZE,
  NUM_COLS,
  NUM_ROWS,
  SIMULATION_SPEED,
} from "../globals";

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>(() =>
    Array.from(Array(NUM_ROWS), () => Array(NUM_COLS).fill(0))
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const startSimulation = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      isRunningRef.current = true;
      runSimulation();
    }
  };

  const runSimulation = useCallback(() => {
    if (!isRunningRef.current) return;

    /**
     * RULES:
     * 1. If any live cell with fewer than two live neighbours it dies.
     * 2. If any live cell with more than three live neighbour it dies.
     * 3. If any live cell with two or three live neighbours lives, it lives.
     * 4. A dead cell with exactly three live neighbours will become alive.
     */
    setGrid((previousGrid) => {
      return produce(previousGrid, (newGrid) => {
        for (let i = 0; i < NUM_ROWS; i++) {
          for (let j = 0; j < NUM_COLS; j++) {
            let neighbors = 0;
            automataOperations.forEach(([x, y]) => {
              const newRow = i + x;
              const newCol = j + y;

              /** Check if outside of boundaries or not */
              if (
                newRow >= 0 &&
                newRow < NUM_ROWS &&
                newCol >= 0 &&
                newCol < NUM_COLS
              ) {
                neighbors += previousGrid[newRow][newCol];
              }
            });

            // Cellular Automation: Rule 1 & 2
            if (neighbors < 2 || neighbors > 3) {
              newGrid[i][j] = 0;
            }
            // Cellular Automation: Rule 4
            else if (previousGrid[i][j] === 0 && neighbors === 3) {
              newGrid[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, SIMULATION_SPEED);
  }, []);

  const updateGrid = (row: number, col: number) => {
    const updatedGrid = produce(grid, (newGrid) => {
      newGrid[row][col] = grid[row][col] ? 0 : 1;
    });
    setGrid(updatedGrid);
  };

  const resetSimulation = () => {
    setGrid(Array.from(Array(NUM_ROWS), (_) => Array(NUM_COLS).fill(0)));
  };
  const generateRandomGrid = () => {
    setGrid(
      Array.from(Array(NUM_ROWS), () =>
        Array.from(Array(NUM_COLS), () => (Math.random() > 0.5 ? 1 : 0))
      )
    );
  };
  return (
    <Box>
      <Button onClick={startSimulation}>{isRunning ? "Stop" : "Start"}</Button>
      <Button onClick={resetSimulation}>Clear</Button>
      <Button onClick={generateRandomGrid}>Randomize</Button>
      <Grid col={NUM_COLS} cellSize={CELL_SIZE}>
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <Cell
              isAlive={!!grid[i][j]}
              updateGrid={() => updateGrid(i, j)}
              cellSize={CELL_SIZE}
            />
          ))
        )}
      </Grid>
    </Box>
  );
};
export default GameOfLife;

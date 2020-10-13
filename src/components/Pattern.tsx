import React, { useCallback, useRef, useState } from "react";

import { Box, Text } from "@chakra-ui/core";
import Cell from "./Cell";
import Grid from "./Grid";
import produce from "immer";
import { automataOperations, CELL_SIZE, SIMULATION_SPEED } from "../globals";

interface Props {
  title: string;
  structure: number[][];
}

const Pattern: React.FC<Props> = ({ title, structure }) => {
  const [grid, setGrid] = useState<number[][]>(structure);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const rowLength = structure.length;
  const colLength = structure[0].length;

  const startSimulation = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      console.log("running");
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
      console.log("hi");
      return produce(previousGrid, (newGrid) => {
        for (let i = 0; i < rowLength; i++) {
          for (let j = 0; j < colLength; j++) {
            let neighbors = 0;
            automataOperations.forEach(([x, y]) => {
              const newRow = i + x;
              const newCol = j + y;

              /** Check if outside of boundaries or not */
              if (
                newRow >= 0 &&
                newRow < rowLength &&
                newCol >= 0 &&
                newCol < colLength
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

    setTimeout(runSimulation, SIMULATION_SPEED + 100);
  }, []);

  const resetSimulation = () => {
    setGrid(structure);
  };

  const handleMouseEnter = () => {
    console.log("enter");
    startSimulation();
  };
  const handleMouseLeave = () => {
    console.log("leave");
    startSimulation();
    resetSimulation();
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Text>{title}</Text>
      <Grid col={structure[0].length} cellSize={CELL_SIZE}>
        {structure.map((rows, i) =>
          rows.map((col, j) => (
            <Cell isAlive={!!grid[i][j]} cellSize={CELL_SIZE} />
          ))
        )}
      </Grid>
    </Box>
  );
};
export default Pattern;

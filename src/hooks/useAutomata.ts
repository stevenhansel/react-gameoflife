import produce from "immer";
import { useCallback, useRef, useState } from "react";
import { automataOperations, SIMULATION_SPEED } from "../globals";

export const useAutomata = (initialValue: number[][]) => {
  const [grid, setGrid] = useState<number[][]>(initialValue);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const rowLength = grid.length;
  const colLength = grid[0].length;

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

    setTimeout(runSimulation, SIMULATION_SPEED);
  }, []);

  const updateGrid = (row: number, col: number) => {
    const updatedGrid = produce(grid, (newGrid) => {
      newGrid[row][col] = grid[row][col] ? 0 : 1;
    });
    setGrid(updatedGrid);
  };

  const resetSimulation = () => {
    setGrid(initialValue);
  };
  const generateRandomGrid = () => {
    setGrid(
      Array.from(Array(rowLength), () =>
        Array.from(Array(colLength), () => (Math.random() > 0.5 ? 1 : 0))
      )
    );
  };
  return {
    grid,
    isRunning,
    startSimulation,
    resetSimulation,
    generateRandomGrid,
    updateGrid,
  };
};

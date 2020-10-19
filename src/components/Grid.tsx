import React from "react";
import { Box } from "@chakra-ui/core";
import Cell from "./Cell";

interface Props {
  cellSize: number;
  cells: number[][];
  updateGrid: (i: number, j: number) => void;
}

const Grid: React.FC<Props> = ({ cells, cellSize, updateGrid }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${cells[0].length}, ${cellSize}px)`}
      marginBottom={12}
      transition="ease"
    >
      {cells.map((rows, i) =>
        rows.map((_, j) => (
          <Cell
            key={`${i}-${j}`}
            isAlive={!!cells[i][j]}
            updateGrid={() => updateGrid(i, j)}
            cellSize={cellSize}
          />
        ))
      )}
    </Box>
  );
};

export default Grid;

import React from "react";
import { Box } from "@chakra-ui/core";
import Cell from "./Cell";

interface Props {
  cellSize: number;
  cells: number[][];
  updateGrid: (i: number, j: number) => void;
  isHovering?: boolean;
}

const Grid: React.FC<Props> = ({ cells, cellSize, updateGrid, isHovering }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${cells[0].length}, ${cellSize}px)`}
      marginBottom={12}
      boxSizing="border-box"
      borderWidth={1}
      borderColor={isHovering ? "red.500" : "none"}
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

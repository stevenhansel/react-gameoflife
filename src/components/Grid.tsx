import React from "react";
import { Box } from "@chakra-ui/core";

interface Props {
  col: number;
  cellSize: number;
}

const Grid: React.FC<Props> = ({ children, col, cellSize }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${col}, ${cellSize}px)`}
      marginBottom={12}
    >
      {children}
    </Box>
  );
};

export default Grid;

import React, { useState } from "react";

import { Box, Text } from "@chakra-ui/core";
import Grid from "./Grid";
import { CELL_SIZE } from "../globals";
import { useAutomata } from "../hooks/useAutomata";

interface Props {
  title: string;
  structure: number[][];
}

const CellPattern: React.FC<Props> = ({ title, structure }) => {
  const { grid, startSimulation, resetSimulation, updateGrid } = useAutomata(
    structure,
    250
  );
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    startSimulation();
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    startSimulation();
    resetSimulation();
    setIsHovering(false);
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Text>{title}</Text>
      <Grid
        cells={grid}
        cellSize={CELL_SIZE}
        updateGrid={updateGrid}
        isHovering={isHovering}
      />
    </Box>
  );
};
export default CellPattern;

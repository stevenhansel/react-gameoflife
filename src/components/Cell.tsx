import { Box } from "@chakra-ui/core";
import React from "react";

interface Props {
  isAlive: boolean;
  updateGrid?: () => void;
  cellSize: number;
}

const Cell: React.FC<Props> = ({ isAlive, updateGrid, cellSize }) => {
  return (
    <Box
      onClick={updateGrid}
      width={`${String(cellSize)}px`}
      height={`${String(cellSize)}px`}
      boxSizing="border-box"
      borderWidth=".2px"
      borderColor="rgba(0,0,0,.4)"
      backgroundColor={isAlive ? "red.400" : "white"}
      transition="ease"
    />
  );
};

export default Cell;

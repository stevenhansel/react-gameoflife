import React from "react";
import { Box } from "@chakra-ui/core";

const TransitionWrapper: React.FC = ({ children }) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      willChange="transform, opacity"
      position="absolute"
    >
      {children}
    </Box>
  );
};

export default TransitionWrapper;

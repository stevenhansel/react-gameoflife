import React, { useCallback, useRef, useState } from "react";
import produce from "immer";
import { Box, Button, Heading } from "@chakra-ui/core";

import Layout from "../components/Layout";
import GameOfLife from "../components/GameOfLife";
import PatternSelector from "../components/PatternSelector";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Heading fontSize={48}>Game of Life</Heading>
      <Box display="flex" flexDirection="row" mt={8}>
        <PatternSelector />
        <GameOfLife />
      </Box>
    </Layout>
  );
};

export default HomePage;

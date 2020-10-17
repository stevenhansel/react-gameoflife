import React from "react";
import { Box, Heading } from "@chakra-ui/core";

import Layout from "./components/Layout";
import GameOfLife from "./components/GameOfLife";
import PatternSelector from "./components/PatternSelector";

const Home: React.FC = () => {
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

export default Home;

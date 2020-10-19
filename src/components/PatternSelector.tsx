import React, { useState } from "react";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/core";

import data from "../data/patterns";
import { Categories, Pattern } from "../types";
import CellPattern from "./CellPattern";

const PatternSelector: React.FC = () => {
  const [patterns, setPatterns] = useState<Pattern[]>(data);
  const [selectedCategory, setSelectedCategory] = useState<Categories>(
    Categories.StillLifes
  );

  return (
    <Box>
      <Heading fontSize={24}>Patterns</Heading>
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        {Object.entries(Categories).map(([_, category]) => (
          <Button
            key={`${category}`}
            onClick={() => setSelectedCategory(category)}
            mx={3}
          >
            <Text>{category}</Text>
          </Button>
        ))}
      </Box>
      <Box
        mt={4}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        mx="auto"
      >
        {patterns
          .filter((pattern) => pattern.category === selectedCategory)
          .map(({ title, structure }) => (
            <Box mx={4}>
              <CellPattern key={title} title={title} structure={structure} />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default PatternSelector;

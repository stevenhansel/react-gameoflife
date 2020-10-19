import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/core";

import Sidebar from "./Sidebar";

import data from "../data/patterns";
import { Categories, Pattern } from "../types";
import CellPattern from "./CellPattern";

const PatternSelector: React.FC = () => {
  const [patterns, setPatterns] = useState<Pattern[]>(data);
  const [selectedCategory, setSelectedCategory] = useState<Categories>(
    Categories.StillLifes
  );

  const handleCategoryChange = (selector: Categories) =>
    setSelectedCategory(selector);

  return (
    <Sidebar>
      <Heading fontSize={24}>Patterns</Heading>
      <Box>
        {Object.entries(Categories).map(([selector, category]) => (
          <Text
            key={`${category}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Text>
        ))}
      </Box>
      <Box>
        {patterns
          .filter((pattern) => pattern.category === selectedCategory)
          .map(({ title, structure }) => (
            <CellPattern key={title} title={title} structure={structure} />
          ))}
      </Box>
    </Sidebar>
  );
};

export default PatternSelector;

import React, { useState } from "react";

import { Box, Button } from "@chakra-ui/core";

const Sidebar: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" alignItems="center">
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </Button>
      </Box>
      <Box display={isOpen ? "block" : "none"}>{children}</Box>
    </Box>
  );
};

export default Sidebar;

import React from "react";

import { Box } from "@chakra-ui/core";

const Layout: React.FC = (props) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={12}>
      {props.children}
    </Box>
  );
};

export default Layout;

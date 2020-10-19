import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/core";

const Layout: React.FC = (props) => {
  return (
    <Box py={[8, 12, 16]} px={[8, 12, 48]} color="red.500">
      <Helmet>
        <title>Game of Life | Steven Hansel</title>
      </Helmet>
      {props.children}
    </Box>
  );
};

export default Layout;

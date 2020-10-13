import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/core";

const Layout: React.FC = (props) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={12}>
      <Helmet>
        <title>Game of Life | Steven Hansel</title>
      </Helmet>
      {props.children}
    </Box>
  );
};

export default Layout;

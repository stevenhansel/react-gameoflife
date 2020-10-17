import React from "react";

import { Helmet } from "react-helmet";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CRA Boilerplate | build react apps blazingly fast</title>
        <meta
          name="description"
          content="CRA Boilerplate is a modern react-redux boilerplate to build scalable web-apps"
        />
      </Helmet>
      <ThemeProvider>
        <CSSReset />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;

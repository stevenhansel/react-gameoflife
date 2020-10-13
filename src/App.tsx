import React from "react";

import { Helmet } from "react-helmet";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

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
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

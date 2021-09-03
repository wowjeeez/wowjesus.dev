import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Landing from "./components/landing/landing";
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
      <ChakraProvider>
        <Router>
          <Route path={"/"} component={Landing}/>
        </Router>
      </ChakraProvider>
  );
}

export default App;

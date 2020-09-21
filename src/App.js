import React from "react";

import DataProvider from "./context/Data";

import Header from "./components/Header";
import Main from "./components/Main";
import Pagination from "./components/Pagination";

import "./global.css";

function App() {
  return (
    <DataProvider>
      <Header />
      <Main />
      <Pagination />
    </DataProvider>
  );
}

export default App;

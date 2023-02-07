import React from "react";

// use Route to define the different routes of the app
import { Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Create from "./components/create";
import Edit from "./components/edit";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" elemet={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;

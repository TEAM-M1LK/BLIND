import { Home } from "allFiles";
import Recruit from "pages/Recruit";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;

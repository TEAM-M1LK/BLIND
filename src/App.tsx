import { Home } from "allFiles";
import Recruit from "pages/Recruit";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Review from "pages/Review";
import Detail from "pages/Detail";
import Write from "pages/Write";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/review" element={<Review />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;

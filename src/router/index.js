import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detailed from "../pages/Detailed";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/details/:id" element={<Detailed />} />
      </Routes>
    </BrowserRouter>
  );
}

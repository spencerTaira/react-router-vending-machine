import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Nav from "./Nav";
import Snack from "./Snack";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/snack/:name" element={<Snack />} />
          {/* <Route path="/snack" element={<VendingMachine />} />
          <Route path="*" element={<Navigate to="/snack" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine;
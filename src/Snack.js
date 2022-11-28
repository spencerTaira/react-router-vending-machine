import React from "react";
import { useParams } from "react-router-dom";

function Snack() {
  const { name } = useParams();
  return (
    <div className="Snack">
      <h1>Here is your {name}</h1>
    </div>
  )
}

export default Snack;
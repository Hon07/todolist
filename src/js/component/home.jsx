// Import the React library and the Lista component
import React from "react";
import Lista from "./Lista.jsx";

// Define the Home component
export function Home() {
  // Return a JSX element that renders the Lista component
  return (
    <div className="text-center mt-5">
      <Lista />
    </div>
  );
}
export default Home

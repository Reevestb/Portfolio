"use client";

import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Button } from "@radix-ui/themes";

const App = () => {
  // State to track the current theme
  const [theme, setTheme] = useState("dark");

  // Effect to apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      className="p-0 m-0 hover:bg-gray-400"
      size={"1"}
      radius="full"
      color="gray"
      onClick={toggleTheme}
      variant="soft"
    >
      {theme === "light" ? (
        <p className="text-base text-black">
          <CiDark />
        </p>
      ) : (
        <p className="text-base text-white">
          <CiLight />
        </p>
      )}
    </Button>
  );
};

export default App;

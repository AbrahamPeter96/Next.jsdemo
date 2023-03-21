"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMount] = useState(false);
  useEffect(() => setMount(true), []);
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => {
              setTheme("light");
            }}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => {
              setTheme("dark");
            }}
          />
        ))}
    </>
  );
}

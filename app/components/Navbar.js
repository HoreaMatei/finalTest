"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Dropdown from "./Dropdown";
import "./navbar.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = usePathname();
  return (
    <div
      className={`${pathname === "/recipes" ? "navigation1" : "navigation"}`}
    >
      <Link className="homeButton" href="/">
        Home
      </Link>
      <Dropdown />
    </div>
  );
};

export default Navbar;

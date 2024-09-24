"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Button } from "@nextui-org/react";
import useSWR from "swr";
import "./dropdown.css";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const rand1 = Math.floor(Math.random() * 23);
  const rand2 = rand1 + 1;
  const rand3 = rand2 + 1;

  console.log(rand1);
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data } = useSWR(
    shouldFetch ? null : `https:www.themealdb.com/api/json/v1/1/search.php?s=`,
    fetcher
  );

  function handleClick() {
    setShouldFetch((prev) => !prev);

    console.log(data);
  }

  function buttonClicked() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="menu">
      <Button className="dropdownButton" onClick={buttonClicked}>
        Other recipes
        {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </Button>
      {isOpen && (
        <div className="dropdown">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              href={{
                pathname: `/recipes/${data.meals[rand1].strMeal}`,
                query: { id: data.meals[rand1].strMeal },
              }}
            >
              {data.meals[rand1].strMeal}
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              href={{
                pathname: `/recipes/${data.meals[rand2].strMeal}`,
                query: { id: data.meals[rand2].strMeal },
              }}
            >
              {data.meals[rand2].strMeal}
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              className="link doi"
              href={{
                pathname: `/recipes/${data.meals[rand3].strMeal}`,
                query: { id: data.meals[rand3].strMeal },
              }}
            >
              {data.meals[rand3].strMeal}
            </Link>
          </li>
        </div>
      )}
    </div>
  );
}

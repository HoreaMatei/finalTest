"use client";
import useSWR from "swr";

import { Anton } from "next/font/google";
import { Button } from "@nextui-org/react";
import react, { useState } from "react";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

import homeVideo from "../public/video.mp4";
import Video from "next-video";
import Navbar from "./components/Navbar";
import getStarted from "/videos/get-started.mp4";
import video from "/videos/backVideo.mp4";
import video1 from "../public/video.mp4";

import food from "./food.jpg";
import food1 from "./food1.jpg";
import sushi from "./sushi.jpg";
import lasagne from "./lasagne.jpg";
import mac from "./mac.jpg";
import cover from "./cover.jpg";
import arrow from "./arrow.png";
import search from "./search.png";
import bigmac from "./bigmac.jpg";
import pancakes from "./pancakes.jpg";
import shawarma from "./shawarma.jpg";

import { useRef } from "react";

const anton = Anton({ weight: ["400"], subsets: ["latin"] });

export const fetcher = (url) => fetch(url).then((res) => res.json());

function FetchOnClick() {
  const heroRef = useRef();

  const [inputValue, setInputValue] = useState("");
  const [shouldFetch, setShouldFetch] = useState(true);

  const { data } = useSWR(
    shouldFetch
      ? null
      : `https:www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
    fetcher
  );

  function handleClick() {
    setShouldFetch(false);
    setInputValue(document.getElementById("input").value);
  }

  function enterPressed(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }
  return (
    <div className="page">
      <Navbar />

      <div className="coverImg">
        <h1>Are you looking for a recipe?</h1>
        <h2>We are here to help!</h2>

        <Button
          onClick={() => {
            heroRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="arrow"
        >
          <Image
            className="arrow1"
            src={arrow.src}
            alt="food"
            width={50}
            height={50}
          />
        </Button>
      </div>
      <div id="okok" ref={heroRef} className="hero">
        <div className="search">
          <input
            autocomplete="off"
            type="search"
            placeholder="search for a meal..."
            id="input"
            onKeyDown={enterPressed}
            required
          ></input>
          <Button className="searchBt" onClick={handleClick}>
            <Image
              key="searchh"
              priority
              className="productImg"
              src={search}
              width={30}
              height={30}
              alt="search"
            />
          </Button>
        </div>

        {data ? (
          <div className="productContainer">
            {data.meals.map((meal) => (
              <div>
                {" "}
                <Link
                  className="linkk"
                  href={{
                    pathname: `/recipes/${meal.strMeal}`,
                    query: { id: meal.idMeal },
                  }}
                >
                  {" "}
                  <div id="product">
                    {" "}
                    <Image
                      key={meal.strMealThumb}
                      priority
                      className="productImg"
                      src={meal.strMealThumb}
                      width={450}
                      height={450}
                      alt="meal"
                    />
                    <div className="leftOfImg">
                      <div className="ingredients">
                        <p>Ingredients:</p>
                        <li className="mainLi">{meal.strIngredient1}</li>
                        <li className="mainLi">{meal.strIngredient2}</li>
                        <li className="mainLi">{meal.strIngredient3}</li>
                        <li className="mainLi">{meal.strIngredient4}</li>
                        <li className="mainLi">{meal.strIngredient5}</li>
                      </div>
                    </div>
                  </div>
                  <div className="mealName">{meal.strMeal}</div>
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="finalSection">
        <p>Recommended recipes</p>

        <div className="recommandations">
          <div className="rec">
            {" "}
            <Link
              className="linkk"
              href={{ pathname: `/recipes/mac`, query: "53013" }}
            >
              {" "}
              <div id="product">
                {" "}
                <Image
                  key="53013"
                  priority
                  className="productImg"
                  src={bigmac.src}
                  width={450}
                  height={450}
                  alt="meal"
                />
                <div className="leftOfImg">
                  <div className="ingredients">
                    <p>Ingredients:</p>
                    <li className="mainLi">Minced Beef</li>
                    <li className="mainLi">Olive Oil</li>
                    <li className="mainLi">Onion</li>
                    <li className="mainLi">Sesame Seed Burger Buns</li>
                    <li className="mainLi">Iceberg Lettuce</li>
                  </div>
                </div>
              </div>
              <div className="mealName">Big Mac</div>
            </Link>
          </div>

          <div className="rec">
            {" "}
            <Link
              className="linkk"
              href={{ pathname: `/recipes/pancakes`, query: "52854" }}
            >
              {" "}
              <div id="product">
                {" "}
                <Image
                  key="52854"
                  priority
                  className="productImg"
                  src={pancakes.src}
                  width={450}
                  height={450}
                  alt="meal"
                />
                <div className="leftOfImg">
                  <div className="ingredients">
                    <p>Ingredients:</p>
                    <li className="mainLi">Flour</li>
                    <li className="mainLi">Eggs</li>
                    <li className="mainLi">Milk</li>
                    <li className="mainLi">Sugar</li>
                    <li className="mainLi">Sunflower Oil</li>
                  </div>
                </div>
              </div>
              <div className="mealName">Pancakes</div>
            </Link>
          </div>

          <div className="rec">
            {" "}
            <Link
              className="linkk"
              href={{ pathname: `/recipes/shawarma`, query: "53028" }}
            >
              {" "}
              <div id="product">
                {" "}
                <Image
                  key="53028"
                  priority
                  className="productImg"
                  src={shawarma.src}
                  width={450}
                  height={450}
                  alt="meal"
                />
                <div className="leftOfImg">
                  <div className="ingredients">
                    <p>Ingredients:</p>
                    <li className="mainLi">Chicken Thighs</li>
                    <li className="mainLi">Coriander</li>
                    <li className="mainLi">Cumin</li>
                    <li className="mainLi">Cadamom</li>
                    <li className="mainLi">Cayenne Pepper</li>
                  </div>
                </div>
              </div>
              <div className="mealName">Shawarma</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchOnClick;

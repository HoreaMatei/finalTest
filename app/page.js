"use client";
import useSWR from "swr";

import { Anton } from "next/font/google";
import { Button } from "@nextui-org/react";
import react, { useState } from "react";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

import Navbar from "./components/Navbar";

import { useRef } from "react";

const anton = Anton({ weight: ["400"], subsets: ["latin"] });

export const fetcher = (url) => fetch(url).then((res) => res.json());

function FetchOnClick() {
  const heroRef = useRef();

  const [inputValue, setInputValue] = useState("");
  const [shouldFetch, setShouldFetch] = useState(true);

  const { data } = useSWR(
    shouldFetch ? null : `${process.env.STORYBLOK_API_KEY}=${inputValue}`,
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
      <video autoPlay loop muted className="videoBg">
        <source src="./fufu3.mp4" type="video/mp4" />
      </video>

      <div className="coverImg">
        <h1 className="h11">Are you looking for a recipe?</h1>
        <h2 className="h22">We are here to help!</h2>

        <Button
          onClick={() => {
            heroRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="arrow"
        >
          <Image
            className="arrow.png"
            src="/arrow.png"
            alt="food"
            width={50}
            height={50}
          />
        </Button>
      </div>

      <div ref={heroRef} className="hero">
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
              className="productImg12"
              src="/search.png"
              width={30}
              height={30}
              alt="search"
            />
          </Button>
        </div>

        {data ? (
          <div className="productContainer">
            {data.meals.map((meal) => (
              <div key={meal.strMealThumb} className="mapped_div">
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
                      width={400}
                      height={400}
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
                </Link>
                <div className="mealName">{meal.strMeal}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="finalSection">
        <p className="recommended_recipes">Recommended recipes</p>

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
                  src="/bigmac.jpg"
                  width={400}
                  height={400}
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
                  src="/pancakes.jpg"
                  width={400}
                  height={400}
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
                  src="/shawarma.jpg"
                  width={400}
                  height={400}
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

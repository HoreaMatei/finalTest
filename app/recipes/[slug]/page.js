"use client";
import useSWR from "swr";
import React, { useState } from "react";
import Image from "next/image";
import "./page.css";
import Link from "next/link";
import { fetcher } from "@/app/page";
import { color, delay } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Button } from "@nextui-org/react";
import { useRef } from "react";

function Page({ params }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const heroRef = useRef(null);
  const [flipped, setFlipped] = useState(false);
  const flip = () => {
    setFlipped(!flipped);
  };

  const name1 = params.slug;
  const { data, error, isLoading } = useSWR(
    `${process.env.API_KEY}=${name1}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const meal = data.meals[0];

  const ingredientsArray = [
    meal.strIngredient1,
    meal.strIngredient2,
    meal.strIngredient3,
    meal.strIngredient4,
    meal.strIngredient5,
    meal.strIngredient6,
    meal.strIngredient7,
    meal.strIngredient8,
    meal.strIngredient9,
    meal.strIngredient10,
    meal.strIngredient11,
    meal.strIngredient12,
    meal.strIngredient13,
    meal.strIngredient14,
    meal.strIngredient15,
    meal.strIngredient16,
    meal.strIngredient17,
    meal.strIngredient18,
    meal.strIngredient19,
    meal.strIngredient20,
  ];
  const measures = [
    meal.strMeasure1,
    meal.strMeasure2,
    meal.strMeasure3,
    meal.strMeasure4,
    meal.strMeasure5,
    meal.strMeasure6,
    meal.strMeasure7,
    meal.strMeasure8,
    meal.strMeasure9,
    meal.strMeasure10,
    meal.strMeasure11,
    meal.strMeasure12,
    meal.strMeasure13,
    meal.strMeasure14,
    meal.strMeasure15,
    meal.strMeasure16,
    meal.strMeasure17,
    meal.strMeasure18,
    meal.strMeasure19,
    meal.strMeasure20,
  ];

  const splitLink = meal.strYoutube.split("watch?v=");
  const embedLink = splitLink.join("embed/");

  let text = meal.strInstructions;

  return (
    <div className="mainContent">
      <Navbar />

      <div className="hero11">
        <div className="recipeSection1">
          <div className="card">
            <div className={flipped ? "flipped" : "none"}>
              <div className="front">
                <h2 className="instructionsH1">Instructions:</h2>
                <div className="intructionsText">{text}</div>
                <Button className="flipBtn2" onClick={flip}>
                  <Image
                    className={flipped ? `flippedArrow` : `arrowPop`}
                    height={50}
                    width={50}
                    src="/right.png"
                    alt="flipp"
                  />
                </Button>
              </div>
              <div className="back">
                <div className="dotted">
                  <div className="ingg">
                    <h1 className="recipeName">{meal.strMeal}</h1>
                    <h2 className="ingredientsH2">Ingredients:</h2>
                    <div className="ingredientsContainer">
                      <div className="items">
                        {ingredientsArray.map((item) =>
                          item === "" ? null : (
                            <div className="item" key={Math.random()}>
                              {item}:{" "}
                            </div>
                          )
                        )}
                      </div>

                      <div className="measures">
                        {measures.map((item) => (
                          <div className="measure" key={Math.random()}>
                            {" "}
                            {item}{" "}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="extraInfo">
                      <div className="category">
                        {" "}
                        <span>Category:</span> {meal.strCategory}
                      </div>
                      <div className="area">
                        <span>Area:</span> {meal.strArea}{" "}
                      </div>
                    </div>

                    <Button className="flipBtn" onClick={flip}>
                      <Image
                        className={flipped ? `flippedArrow` : `arrowPop`}
                        height={50}
                        width={50}
                        src="/right.png"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nameAndPhoto">
            <div className="loo">
              <div
                className="imgInHere"
                style={{ backgroundImage: ` url(${meal.strMealThumb}) ` }}
              ></div>
            </div>
          </div>
        </div>
        <Button
          onClick={() => scrollToSection("ytSection")}
          className="smoothArrow"
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

      <div id="ytSection">
        <h1 className="ytTutorial">Youtube tutorial:</h1>
        <iframe className="ytVideo" src={embedLink} />
      </div>
    </div>
  );
}

export default Page;

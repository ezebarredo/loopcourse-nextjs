"use client";
// import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "../../page.module.css";
// import { Levels } from "../../../types/types";
import LevelsData from "../../cards/main";
import Navigation from "@/app/nav/nav";
// import NavLevels from "@/app/nav/nav_levels";

// Returns the value of the first element in the array
export default function GetLevel({ params }: { params: { id: string } }) {
  const currentLevel = LevelsData.find((level) => level.id === params.id);
  const currentCards = currentLevel?.cards;

  // STATES
  const [count, setCount] = useState(1);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateCard, setRotateCard] = useState(false);

  const resetFlash = () => {
    setCount(1);
    setCurrentFlashcard(0);
    setIsFlipped(false);
    setRotateCard(false);
  };

  const nextFlash = () => {
    if (currentCards) {
      if (currentFlashcard < currentCards.length - 1) {
        setCount(count + 1);
        setCurrentFlashcard(currentFlashcard + 1);
        setIsFlipped(false);
        setRotateCard(false);
      }
    }
  };

  const previousFlash = () => {
    if (currentFlashcard > 0) {
      setCount(count - 1);
      setCurrentFlashcard(currentFlashcard - 1);
      setIsFlipped(false);
      setRotateCard(false);
    }
  };

  const flipFlash = () => {
    setIsFlipped(!isFlipped);
    setRotateCard(true);
  };

  const currentCardFront = currentCards
    ? currentCards[currentFlashcard].front
    : "";
  const currentCardBack = currentCards
    ? currentCards[currentFlashcard].back
    : "";

  return (
    <>
      <main className="flex-shrink-0">
        <Navigation />
        <section className="py-5 bg-secondary bg-opacity-20">
          <div className="container cont-flashcard px-4 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xl-6">
                <div className="d-flex div-flex hstack gap-2 text-dark mb-4 justify-content-center">
                  <h2>
                    <span className="set-level badge fw-bolder text-light bg-primary bg-opacity-60">
                      {currentLevel?.id}
                    </span>
                  </h2>
                  <h3 className="fw-bolder title-flashcard text-dark">
                    {currentLevel?.title}
                  </h3>
                </div>
              </div>
            </div>
            <div className={"d-flex justify-content-center mb-3"}>
              <audio src={currentLevel?.audio} controls />
            </div>
          </div>
          {/*  NEW container for Counter and Restart button  */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="d-flex counters p-1 mb-3 align-items-center justify-content-center">
                  <div className="col d-flex align-items-center justify-content-start ms-2">
                    <button
                      type="button"
                      className="btn btn-restart btn-dark text-white"
                      onClick={resetFlash}
                    >
                      Reset
                    </button>
                  </div>
                  <div className="col d-flex align-items-center justify-content-start ms-2">
                    <div className={styles.counter01}>{count}</div>
                    <div className={styles.counter50}>
                      {" "}
                      / {currentCards?.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  NEW container Flashcard  */}
          <div className={`container ${styles.flashcards}`}>
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <a>
                  <div className={`${styles.flashtype} bg-light`}>
                    <div className="img-cover">
                      <Image
                        alt="image"
                        className={`${styles.flashimage} rounded`}
                        src={
                          currentCards
                            ? currentCards[currentFlashcard].image
                            : ""
                        }
                      />
                    </div>
                    <div
                      className={`${styles.cardfront} text-space flashType ${
                        rotateCard ? "rotate" : ""
                      }`}
                    >
                      {isFlipped ? currentCardBack : currentCardFront}
                    </div>
                  </div>
                </a>
                {/*  Info message init  */}
                <div className="init-message"></div>
              </div>
            </div>
          </div>
          {/*  Buttons  */}
          <div className="container my-4">
            <div className="row">
              <div className="col d-none d-lg-block"></div>
              <div className="col-xl-6">
                <div className="d-flex justify-content-between">
                  {/*  PREVIOUS BUTTON  */}
                  <a
                    className={`${styles.btnflash} ${styles.btnprev}`}
                    onClick={previousFlash}
                  >
                    <i className={"bi bi-arrow-left-short"}></i>
                  </a>
                  {/* FLIP BUTTON  */}
                  <a
                    className={`${styles.btnflash} ${styles.btnflip}`}
                    onClick={flipFlash}
                  >
                    <i className={"bi bi-arrow-down-up"}></i>
                  </a>
                  {/*  NEXT BUTTON  */}
                  <a
                    className={`${styles.btnflash} ${styles.btnnext}`}
                    onClick={nextFlash}
                  >
                    <i className={"bi bi-arrow-right-short"}></i>
                  </a>
                </div>
              </div>
              <div className="col d-none d-lg-block"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

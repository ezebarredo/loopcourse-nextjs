"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "../../page.module.css";
// import TypeLevels from "../../../types/types";
import Levels from "../../cards/main";

// type Level = {
//   id: string;
//   title: string;
//   audio: string;
//   image: string;
//   front: string;
//   back: string;
// };
// const levels: Level[] = Levels;

// Returns the value of the first element in the array
export default function GetLevel({ params }: { params: { id: string } }) {
  const currentLevel = Levels.find((level) => level.id === params.id);
  const currentCard = currentLevel?.cards;
  console.log(currentCard);

  // STATES
  const [count, setCount] = useState(1);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateCard, setRotateCard] = useState(false);

  // NAV levels
  // const levelsIds = level.map(({ id }) => id);
  // console.log(levelsIds);

  const resetFlash = () => {
    setCount(1);
    setCurrentFlashcard(0);
    setIsFlipped(false);
    setRotateCard(false);
  };

  const nextFlash = () => {
    if (currentFlashcard < currentCard?.length - 1) {
      setCount(count + 1);
      setCurrentFlashcard(currentFlashcard + 1);
      setIsFlipped(false);
      setRotateCard(false);
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

  return (
    <>
      <main className="flex-shrink-0">
        {/* NAV */}
        <nav className="d-flex gap-5">
          {/* {levelsIds.map((id) => (
            <a href={`/level/${id}`}>Level {id}</a>
          ))} */}
          <Link href="/level/1.1">Level 1.1</Link>
          <Link href="/level/1.2">Level 1.2</Link>
          <Link href="/level/1.3">Level 1.3</Link>
        </nav>
        {/*  Section Flash card */}
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
                      / {currentCard?.length}
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
                      <img
                        className={`${styles.flashimage} rounded`}
                        src={currentCard[currentFlashcard].image}
                      />
                    </div>
                    <div
                      className={`${styles.cardfront} text-space flashType ${
                        rotateCard ? "rotate" : ""
                      }`}
                    >
                      {isFlipped
                        ? currentCard[currentFlashcard].back
                        : currentCard[currentFlashcard].front}
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

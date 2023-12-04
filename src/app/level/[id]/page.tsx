import Image from "next/image";
import styles from "../../page.module.css";
import { cards } from "../../level_1";

type Level = {
  id: string;
  title: string;
  audio: string;
  image: string;
  front: string;
  back: string;
};

const level: Level[] = cards;

export default function GetLevel({ params }: { params: { id: string } }) {
  const currentLevel = level.find((level) => level.id === params.id);
  return (
    <>
      <main className="flex-shrink-0">
        <nav className="d-flex gap-5">
          <a href="http://localhost:3000/level/1.1">Level 1.1</a>
          <a href="http://localhost:3000/level/1.2">Level 1.2</a>
          <a href="http://localhost:3000/level/1.3">Level 1.3</a>
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
                    >
                      Reset
                    </button>
                  </div>
                  <div className="col d-flex align-items-center justify-content-start ms-2">
                    <div className={styles.counter01}>1</div>
                    <div className={styles.counter50}> / 30</div>
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
                        src={currentLevel?.image}
                      />
                    </div>
                    <div className={`${styles.cardfront} text-space`}>
                      {currentLevel?.front}
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
                  <a className={`${styles.btnflash} ${styles.btnprev}`}>
                    <i className={"bi bi-arrow-left-short"}></i>
                  </a>
                  {/* FLIP BUTTON  */}
                  <a className={`${styles.btnflash} ${styles.btnflip}`}>
                    <i className={"bi bi-arrow-down-up"}></i>
                  </a>
                  {/*  NEXT BUTTON  */}
                  <a className={`${styles.btnflash} ${styles.btnnext}`}>
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

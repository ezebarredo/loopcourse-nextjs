import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

export default function Nav() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-primary bg-gradient bg-opacity-10">
        <div className="container px-5">
          <a className="navbar-brand mb-0 h1 text-primary" href="index.html">
            Loop Course
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item login">
                <a
                  className="btn btn-outline-primary px-4 me-2"
                  href="https://loopcourse.com?msopen=/member/sign_in"
                >
                  Zaloguj się
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle btn btn-primary fw-bold text-white px-3"
                  data-bs-auto-close="outside"
                  id="navbarDropdownLevels"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  OTWÓRZ KURS
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end all-menu"
                  aria-labelledby="navbarDropdownPortfolio"
                >
                  {/* Dropdown menu */}
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 1 | A1{" "}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.html"
                        >
                          1.1 Subject Pronouns
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.2 Possessive Pronouns
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.3 to be
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.4 have
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.5 This, that, these, those
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.6 Present Simple statements
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.7 Present Simple questions &amp; negatives
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.8 Object pronouns
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.9 a, an, the, some
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          1.10 Cardinal Numbers
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 2 | A1
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=2_1"
                        >
                          2.1 Time
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.2 Adverbs of frequency
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.3 Wh questions + Present Simple
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.4 There is, There are + Prepositions of Place
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.5 Cardinal Numbers &gt;100
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.6 Present Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.7 Present Simple vs. Present Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.8 Wh questions + Present Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.9 Ordinal Numbers
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          2.10 Can, Could
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 3 | A1
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=3_1"
                        >
                          3.1 Present Simple - 3rd person{" "}
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.2 Possessive Pronouns
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.3 Reflexive pronouns
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.4 Future Simple
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.5 Going to
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.6 Wh questions - Future Simple/ Going to
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.7 Past Simple - was, were
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.8 Past Simple - regular verbs
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.9 Past Simple - irregular verbs
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          3.10 Past Simple - Wh questions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 4 | A2
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=4_1"
                        >
                          4.1 Countable nouns - a, an, some, any
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.2 Uncountable nouns - some, any
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.3 A lot of, a few, many, much
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.4 Modal verbs - can, could
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.5 Modals verbs - should, shouldn't
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.6 Modal verbs - must/have to, don't have to
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.7 Modal verbs - mustn't, don't have to
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.8 Modals - can, should, must, have to
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.9 Imperative - instructions
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          4.10 And, but, so, because
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 5 | A2
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=5_1"
                        >
                          5.1 Make vs. Do - collocations
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.2 Get - collocations
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.3 A few, few, a little, little
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.4 Adjectives grading - more, less, (not) as...as
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.5 Adjectives -ing/ -ed
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.6 Adjectives and adverbs
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.7 Adjectives and adverbs - grading
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.8 Borrow vs. Lend
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.9 Too, enough, very
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          5.10 Tell vs. Say - collocations
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 6 | A2
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=6_1"
                        >
                          6.1 Present Perfect
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.2 Present Perfect - just, already, yet
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.3 Present Perfect - since, for
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.4 Present Perfect - been, gone
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.5 Present Perfect vs. Past Simple
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.6 Irregular Verbs 1
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.7 Irregular Verbs 2
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.8 Irregular Verbs 3
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.9 Love, like, enjoy + ing
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          6.10 State Verbs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 7 | B1
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=7_1"
                        >
                          7.1 So vs. such
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.2 Relative Pronouns
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.3 Past Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.4 Past Continuous vs. Past Simple
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.5 Used to/ Would
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.6 Used to vs. Past Tenses
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.7 Future - three options
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.8 Auxiliary Verbs - Present Tenses
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.9 Auxiliary Verbs - Past Tenses
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          7.10 Auxiliary Verbs - Future Tenses
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 8 | B1
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=8_1"
                        >
                          8.1 Me too, me neither
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.2 Stop, try, go on, remember, regret, forget
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.3 Present Perfect Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.4 Future Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.5 Predictions - present and future (must, may,
                          might, could, should)
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.6 Deduction - past (must, may, might, could, should)
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.7 Past Perfect
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.8 Past Perfect Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.9 Have/Get sth done
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          8.10 Can vs. Be able to
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 9 | B1+
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=9_1"
                        >
                          9.1 First and Zero Conditional plus Unless
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.2 Second Conditional
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.3 Third Conditional
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.4 Question Tags - Present
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.5 Question Tags - Past
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.6 Question Tags - Future and Modals
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.7 Future Perfect and Future Perfect Continuous
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.8 Clauses of Contrast, Purpose, Reason
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.9 Wishes - Present
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          9.10 Wishes - Past
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      Poziom 10 | B2
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="levels/flashcard.php?set_number=10_1"
                        >
                          10.1 Used to, be used to, get used to
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.2 Likely, Unlikely
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.3 Passive Voice - Present Tenses
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.4 Passive Voice - Past Tenses
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.5 Passive Voice - Future Tenses
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.6 Passive Voice with Modal Verbs
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.7 Indirect Questions
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.8 Subject/Object Questions
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.9 Reported Speech
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item disabled" href="#">
                          10.10 Reporting Verbs and Distancing
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control search mr-sm-2"
              type="search"
              placeholder="Wpisz czego szukasz"
              aria-label="Search"
            />
          </form>{" "}
          <ul className="list-group results position-absolute"></ul>
        </div>
      </Navbar>
    </>
  );
}

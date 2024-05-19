"use client";

export default async function Home() {
  return (
    <>
      <main className="flex-shrink-0">
        {/* Header*/}
        <header className="bg-light py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Wypróbuj dostępne lekcje audio 😃🔈</strong>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    />
                  </div>
                  <h1 className="display-5 fw-bolder text-dark mb-2 animate__animated animate__fadeInLeft ">
                    Kurs angielskiego na wygodnych fiszkach!
                  </h1>
                  <p className="lead fw-normal text-secondary mb-4 animate__animated animate__fadeInLeft ">
                    <i className="bi bi-check2-circle" />{" "}
                    <strong>Nowatorski</strong> kurs języka angielskiego
                    <br />
                    <i className="bi bi-check2-circle" />{" "}
                    <strong>Intuicyjna</strong> nauka przez powtarzanie
                    <br />
                    <i className="bi bi-check2-circle" /> Stworzony w oparciu o{" "}
                    <strong>12 lat doświadczenia</strong>
                    <br />w pracy z kursantami
                    <br />
                    <i className="bi bi-check2-circle" /> Poziomy{" "}
                    <strong>od A1 do B2</strong>
                  </p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start animate__animated animate__fadeInLeft ">
                    <a className="otworz-kurs btn btn-primary fw-bold btn-lg px-4 me-sm-3 col-lg-6">
                      OTWÓRZ KURS 👆
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-xxl-6  text-center">
                {/* Flashcard with animation  */}
                <a>
                  <div className="flash-home">
                    <img
                      className="img-fluid mb-5 mb-lg-0 rounded"
                      src="/img/dlaczego.jpg"
                      alt="dlaczego-loop-course"
                    />
                    {/* <img className="flash-home-image rounded" /> */}
                    <div className="card-index" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Section  - cenna */}
        <section className="prices mt-3" id="prices">
          <div className="container px-5 pt-5 pb-2" id="featured-3">
            <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-success">
                  <div className="card-header text-bg-secondary text-white bg-success py-3">
                    <h4 className="my-0 fw-normal">Opłata miesięczna</h4>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title pricing-card-title fw-light">
                      <del>39,99zł</del>
                    </h3>
                    <h1 className="card-title pricing-card-title fw-bold text-danger">
                      9,99zł
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4 text-muted d-flex align-items-center">
                      <p className="fw-normal text-muted lh-base mb-3 text-start">
                        <i className="bi bi-check-circle-fill" /> 3 dni gratis
                        na przetestowanie kursu!
                        <br />
                        <i className="bi bi-check-circle-fill" /> Pełen dostęp
                        do kursu 24 h na dobę
                        <br />
                        <i className="bi bi-check-circle-fill" /> Opłata
                        automatycznie odnawiana co miesiąc
                        <br />
                        <i className="bi bi-check-circle-fill" /> Oszczędzasz 30
                        zł miesięcznie!
                        <br />
                      </p>
                    </ul>
                    <a
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                      href="https://loopcourse.com?msopen=/member/plans/kpeep6rhjz"
                    >
                      Kup teraz
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-warning">
                  <div className="card-header text-bg-warning bg-warning py-3">
                    <h4 className="my-0 fw-normal">Opłata roczna</h4>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title pricing-card-title fw-light">
                      <del>399,99zł</del>
                    </h3>
                    <h1 className="card-title pricing-card-title fw-bold text-danger">
                      99,99zł
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4 text-muted d-flex align-items-center">
                      <p className="fw-normal text-muted lh-base mb-3 text-start">
                        <i className="bi bi-check-circle-fill" /> 5 dni gratis
                        na przetestowanie kursu!
                        <br />
                        <i className="bi bi-check-circle-fill" /> Pełen dostęp
                        do kursu 24 h na dobę
                        <br />
                        <i className="bi bi-check-circle-fill" /> Opłata
                        pobierana z góry za 12 miesięcy dostępu
                        <br />
                        <i className="bi bi-check-circle-fill" /> Zyskujesz 2
                        miesiące gratis i oszczędzasz 300 zł rocznie!
                        <br />
                      </p>
                    </ul>
                    <a
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                      href="https://loopcourse.com?msopen=/member/plans/8gcxyxuj89"
                    >
                      Kup teraz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 - Dlaczego Loop Course */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid mb-5 mb-lg-0"
                  src="/img/dlaczego.jpg"
                  alt="dlaczego-loop-course"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Dlaczego Loop Course?</h2>
                <p className="lead fw-normal text-muted lh-base mb-0">
                  <i className="bi bi-check-circle-fill" />{" "}
                  <strong>Metoda Małych Kroków:</strong> jedna fiszkowa lekcja
                  zajmuje
                  <br />
                  <strong>średnio 8 minut!</strong>
                  <br />
                  <i className="bi bi-check-circle-fill" />{" "}
                  <strong>Powtarzanie:</strong> każdą z naszych lekcji możesz{" "}
                  <strong>przerobić kilka razy</strong> albo wrócić do danego
                  tematu ponownie dla <strong>utrwalenia.</strong>
                  <br />
                  <i className="bi bi-check-circle-fill" />{" "}
                  <strong>Kompletne frazy:</strong> 90% Loop Course to gotowe do
                  użycia frazy zamiast pojedynczych słówek.
                  <br />
                </p>
                <div className="d-flex align-items-end"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3 - Co Zawiera Loop course  */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-first order-lg-last">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="img/co-zawiera.jpg"
                  alt="co-zawiera"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Co zawiera Loop Course?</h2>
                <p className="lead fw-normal text-muted mb-0">
                  <i className="bi bi-check-circle-fill" /> 10 poziomów (od A1
                  do B2)
                  <br />
                  <i className="bi bi-check-circle-fill" /> Jasny i logiczny
                  program, idealny do samodzielnej nauki
                  <br />
                  <i className="bi bi-check-circle-fill" /> 100 krótkich lekcji
                  na fiszkach
                  <br />
                  <i className="bi bi-check-circle-fill" /> 30 fiszek w każdym
                  zestawie
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4 - Co przygotowujemy dla was?  */}
        <section className="py-5 bg-light">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/img/przygotowujemy.jpg"
                  alt="przygotowujemy-dla-was"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Co przygotowujemy dla was?</h2>
                <p className="lead fw-normal text-muted mb-0">
                  <i className="bi bi-check-circle-fill" /> Nagrania audio do
                  nauki i powtórek ze słuchu
                  <br />
                  <i className="bi bi-check-circle-fill" /> Pełny kurs
                  słownictwa, od poziomu A1 do B2
                  <br />
                  <i className="bi bi-check-circle-fill" /> Test poziomu
                  <br />
                  <i className="bi bi-check-circle-fill" /> Quizy po każdej
                  lekcji
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5 - Our mission */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-first order-lg-last">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="/img/our-mission.jpg"
                  alt="our-mission"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Nasza misja</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Angielski otwiera drzwi na świat, nowe znajomości i lepsze
                  możliwości zawodowe. <br />
                  Chcemy, żeby każdy miał{" "}
                  <strong>
                    wygodny dostęp do wysokiej jakości materiałów,
                  </strong>{" "}
                  które może łatwo dopasować do swoich możliwości czasowych.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section newsletter */}
        <aside className="subscription2 bg-primary bg-gradient p-4 p-sm-5">
          <div className="d-flex align-items-center justify-content-center flex-column flex-xl-row text-center text-xl-start">
            <div className="mb-4 mb-xl-0 text-center">
              <div className="fs-3 fw-bold text-white">
                Dołącz do naszej społeczności! Bądź na bieżąco z nowościami w
                kursie.
              </div>
              <div className="text-white-50">
                {/* Sign up for our newsletter for the latest updates. */}
              </div>
            </div>
            <div className="ms-xl-4 text-center">
              <div className="input-group mb-2">
                <a
                  target="_blank"
                  className="btn btn-lg btn-outline-light fs-3"
                  href="https://mailchi.mp/088ac6eec955/newsletter-loopcourse"
                >
                  Zapisz się
                </a>
              </div>
            </div>
          </div>
        </aside>
      </main>
      {/* Footer*/}
      <footer className="bg-secondary py-4 mt-auto id=footer-section">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright © Loop Course 2024
              </div>
            </div>
            <div className="col-auto">
              <a
                className="link-light small me-3"
                href="https://www.facebook.com/profile.php?id=100092476860540"
                target="”_blank”"
              >
                <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }} />
              </a>
              <a
                className="link-light small me-5"
                href="https://www.instagram.com/loopcourse/"
                target="”_blank”"
              >
                <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }} />
              </a>
              <a className="link-light small ms-auto mb-2" href="#">
                <i
                  className="bi bi-arrow-up-square-fill"
                  style={{ fontSize: "2rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Modal */}
      <div
        className="modal fade"
        id="cookieconsent1"
        tabIndex={-1}
        aria-labelledby="cookieconsentLabel1"
        aria-hidden="true"
        data-mdb-backdrop="static"
        data-mdb-keyboard="false"
      >
        <div className="modal-dialog modal-sm d-flex justify-content-center">
          <div className="modal-content text-center">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title text-primary" id="cookieconsentLabel1">
                Polityka prywatności
              </h5>
            </div>
            <div className="modal-body p-4">
              Wykorzystujemy ciasteczka do usprawnienia działania strony.
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="learn-more-button btn btn-outline-primary"
              >
                Więcej
              </button>
              <button
                type="button"
                className="confirm btn btn-primary"
                data-mdb-dismiss="modal"
              >
                Zaakceptuj
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* flashcard home */}
    </>
  );
}

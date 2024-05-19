"use client";

import Home from "./home/home";
import Navigation from "./nav/nav";

export default async function Page() {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Levels from "../cards/main";
import { Button } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

export default function NavExample() {
  // const allLevels = Levels.map((id) => id);
  // const levelsTitle = Levels.map(({ title }) => title);
  // const levelsIds = Levels.map(({ id }) => id);
  // const levelsNumer = Levels.map(({ level }) => level);
  const topLevels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  // console.log(
  //   topLevels.map((topLevel) => {
  //     return Levels.filter((level) => level.level === topLevel)
  //       .map(({ level }) => level)
  //       .find((number) => number === topLevel);
  //   })
  // );

  // .find return first element from array
  const uniqueLevels = topLevels
    .map((topLevels) => {
      return Levels.find((level) => level.level === topLevels)?.level;
    })
    // take filter below after upload all levels
    .filter(Boolean);

  console.log(uniqueLevels);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Loop Course</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Button variant="primary">Twoje Konto</Button>
              <NavDropdownMenu title="Otworz kurs" id="basic-nav-dropdown">
                {/* Level example */}
                <DropdownSubmenu href="#" title="Level Example X">
                  <NavDropdown.Item href="#">Sub 1</NavDropdown.Item>
                </DropdownSubmenu>
                {/* Level example */}

                {/* Top level + sublevel  */}
                {uniqueLevels.map((topLevel) => {
                  const filterLevels = Levels.filter(
                    (levelNumber) => levelNumber.level === topLevel
                  );
                  console.log(filterLevels);
                  return (
                    <DropdownSubmenu
                      key={topLevel}
                      href="#"
                      title={`Poziom ${topLevel}`}
                    >
                      {filterLevels.map(({ id, title }) => (
                        <NavDropdown.Item key={id} href={`/level/${id}`}>
                          {id} {title}
                        </NavDropdown.Item>
                      ))}
                    </DropdownSubmenu>
                  );
                })}
              </NavDropdownMenu>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

import Levels from "../cards/main";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

export default function Navigation() {
  const topLevels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
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
                {/* Top level + levels  */}
                {topLevels.map((topLevel) => {
                  const filteredLevels = Levels.filter(
                    (level) => level.topLevel === topLevel
                  );
                  return (
                    <DropdownSubmenu
                      key={topLevel}
                      href="#"
                      title={`Poziom ${topLevel}`}
                    >
                      {filteredLevels.map(({ id, title }) => (
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

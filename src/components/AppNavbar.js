import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";

export const AppNavbar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={NavLink} to="/">
        <img
          src="/images/logo-no-background.png"
          className="mr-3 h-6 sm:h-9"
          alt="Karentoroku Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Karentoroku
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to={"/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={NavLink} to={"/availability"}>
          Availability
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

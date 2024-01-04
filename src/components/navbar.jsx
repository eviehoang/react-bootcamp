import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import Banner from "./banner";

export default function Component() {
  return (
    <section className="border-double border-b-4 bg-lavender border-blue">
      <Banner />
      <Navbar className="bg-transparent mb-1">
        <NavbarCollapse className="flex md:flex md:flex-grow justify-center">
          <NavbarLink href="#" className="navLink">
            Home
          </NavbarLink>
          <NavbarLink href="#" className="navLink">
            Projects
          </NavbarLink>
          <NavbarLink href="#" className="navLink">
            Resume
          </NavbarLink>
          <NavbarLink href="#" className="navLink">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </section>
  );
}

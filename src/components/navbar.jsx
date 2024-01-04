import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Banner from "./banner";

export default function Component() {
  return (
    <section className="border-double border-b-4 bg-blue">
        <Banner />
      <Navbar className="bg-transparent">
        <NavbarCollapse className="flex md:flex md:flex-grow justify-center">
          <NavbarLink href="#">
            Home
          </NavbarLink>
          <NavbarLink href="#">Projects</NavbarLink>
          <NavbarLink href="#">Resume</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </section>
  );
}

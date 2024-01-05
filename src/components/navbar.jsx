import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import Banner from "./banner";

export default function Component() {
  return (
    <section className="bg-transparent flex justify-between items-center border-none p-2" id="navFont">
      <div>
        <Banner />
      </div>
      <div>
        <Navbar className="bg-transparent">
          <NavbarCollapse className="flex md:flex md:flex-grow justify-center">
            <NavbarLink href="home" className="navLink">
              Home
            </NavbarLink>
            <NavbarLink href="projects" className="navLink">
              Projects
            </NavbarLink>
            <NavbarLink href="resume" className="navLink">
              Resume
            </NavbarLink>
            <NavbarLink href="contact" className="navLink">
              Contact
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </section>
  );
}

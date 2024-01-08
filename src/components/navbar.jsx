import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Banner from "./banner";

export default function Component() {

  return (
    <section className="bg-transparent flex justify-between items-center border-none p-2 Nav" id="navFont">
      <div>
        <Banner />
      </div>
      <div>
        <Navbar className="bg-transparent">
          <NavbarToggle className="bg-transparent text-white justify-evenly border-0 hover:bg-transparent focus:border-0 focus:outline-none active:border-0" />
          <NavbarCollapse>
            <NavbarLink className="navLink" href="/home">
              Home
            </NavbarLink>
            <NavbarLink className="navLink"href="/projects">
              Projects
            </NavbarLink>
            <NavbarLink className="navLink" href="/resume">
              Resume
            </NavbarLink>
            <NavbarLink className="navLink" href="/contact">
              Contact
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </section>
  );
}

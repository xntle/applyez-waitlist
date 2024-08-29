import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <Navbar className="bg-transparent">
      <NavbarBrand>
      <h1 className="text-3xl font-bold">applyEZ</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
             Sign Up For Our Waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

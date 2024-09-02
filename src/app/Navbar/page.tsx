import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <Navbar className="bg-transparent shadow-none border-b-0">
      <NavbarBrand>
        <h3 className="text-3xl font-bold text-white">ApplyEZ</h3> {/* Enlarge and bold the text */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
             Sign Up For Our Waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

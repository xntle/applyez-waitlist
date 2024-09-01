import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
    <h3 className="text-2xl font-bold text-orange-500">fide</h3>
    <img src="/images/app-store.png" alt="Download on the App Store" className="w-32" />
  </div>
  );
}

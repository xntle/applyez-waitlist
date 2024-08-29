import Image from "next/image";
import LandingPage from "./LandingPage/page";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
    <LandingPage />
  </NextUIProvider>
  );
}


// import Image from "next/image";
import LandingPage from "./LandingPage/page";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Upload from "./Upload/page";
// import CoverLetter from "./Coverletter/page";

const Home: React.FC = () => {
  return (
    <NextUIProvider>
    <LandingPage />
    {/* <CoverLetter/> */}
    </NextUIProvider>
  );
};

export default Home;


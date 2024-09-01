// import Image from "next/image";
import LandingPage from "./LandingPage/page";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Link from "next/link";

// import CoverLetterForm from './pages/coverletter'


const Home: React.FC = () => {
  return (
    <NextUIProvider>
      <LandingPage />
      <div>
        <Link href="/coverletter">
          <button style={{ padding: "10px 20px", fontSize: "20px" }}>
            Generate Cover Letter
          </button>
        </Link>
      </div>
    </NextUIProvider>
  );
};

export default Home;


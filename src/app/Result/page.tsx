import React from "react";
import { Button, Link } from "@nextui-org/react";
import Header from "./header";
import Detail from "./detail";
import Celebrity from "./celebrity";
import Career from "./career";
import Teamwork from "./teamwork";
import OtherTypes from "./othertypes";
import Share from "./share";
import Waitlist from "./waitlist";


const ResultPage = () => {
  return (
    <>
     <Header/>
      {/* Section 2: Personality Details */}
     <Detail/>

      {/* Section 3: Celebrity Comparisons */}
<Celebrity/>    

      {/* Section 4: Alternate Career Path */}
<Career/>

      {/* Section 5: Other Fide Types */}
      <OtherTypes/>

      {/* Section 6: Teamwork Section */}
    <Teamwork/>

      {/* Section 7: Social Sharing */}
<Share/> 
<Waitlist/>
      </>
  );
};

export default ResultPage;

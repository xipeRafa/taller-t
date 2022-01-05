import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar"; 

import { AddAuction } from './AddAuction';


export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);

  return (
    <div className="container-fluid">
       {auction && <ProgressBar auction={auction} setAuction={setAuction} />} 


      <div>
        <AddAuction setAuction={setAuction}/>
      </div>

    </div>
  );
};

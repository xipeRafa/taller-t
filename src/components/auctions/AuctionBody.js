import React, { useContext, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { AuctionCard } from "./AuctionCard";
import { ProgressBar } from "./ProgressBar";
import { FilterContext } from "../../context/FilterContext";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ItemSelected from "./ItemSelected";
import Filters from "./Filters";

import "./picker.css";
import es from "date-fns/locale/es";
import { AddAuction } from './AddAuction';

registerLocale("es", es);

export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { DB } = useContext(FilterContext);

  const [itemState, setItemState] = useState();

  const handleState = (a) => {
    setItemState(a);
  };

  /* let admin = currentUser ? currentUser.email : false; */

 /*  let DBD;
  if (
    admin === "superadmin@gmail.com" ||
    "superadmin2@gmail.com" ||
    "superadmin3@gmail.com"
  ) {
    DBD = DB.sort((o1, o2) =>
      o1.completed === o2.completed ? 0 : o2.completed ? -1 : 1
    );
  } else {
    DBD = [];
  } */

  return (
    <div className="container-fluid">
      {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

      <div
        style={{ zIndex: "9999999" }}
        className="text-center w-50 position-fixed top-10 start-50 translate-middle"
      >
        {globalMsg && <Alert variant="danger">{globalMsg}</Alert>}
      </div>

      <div>
        <AddAuction />
      </div>


   {/*    {DB && (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ">
         
          {DBD.filter((el) => el !== undefined)
            .sort((o1, o2) => o1.duration - o2.duration)
            .map((doc) => {
              return (
                <AuctionCard
                  item={doc}
                  key={doc.id}
                  handleState={handleState}
                />
              );
            })}
        </div>
      )} */}

    </div>
  );
};

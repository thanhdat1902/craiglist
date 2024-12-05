import React, { useState } from "react";
import CheckBoxFilter from "./checkBoxFilter";
import MaplocationFilter from "./mapLocationFilter";
import PriceFilter from "./priceFilter";
import MinMaxComponent from "./minMaxComponent";
import CalendarComponent from "./calendarComponent";
import RelatedSearch from "./relatedSearch";
import OtherFilter from "./otherFilter";

export default function LeftPanelFilter() {
  const [isOneBedroom, setIsOneBedroom] = useState(false);
  const [isTwoBedroom, setIsTwoBedroom] = useState(false);
  const [isFurnished, setIsFurnished] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "20vw",
        borderRight: "solid 1px black",
        padding: 10,
        overflow: "scroll",
      }}
    >
      <h1
        style={{
          color: "#00E",
          fontSize: 20,
          fontWeight: "normal",
          cursor: "pointer",
        }}
      >
        apartments /​ housing for rent
      </h1>
      <CheckBoxFilter />
      <MaplocationFilter />
      <PriceFilter />
      <div>
        <div style={{ fontSize: 11, marginTop: 10 }}>BEDROOMS</div>
        <MinMaxComponent
          isOneBedroom={isOneBedroom}
          setIsOneBedroom={setIsOneBedroom}
          isTwoBedroom={isTwoBedroom}
          setIsTwoBedroom={setIsTwoBedroom}
        />
      </div>
      <div>
        <div style={{ fontSize: 11, marginTop: 10 }}>BATHROOMS</div>
        <MinMaxComponent />
      </div>
      <div>
        <div style={{ fontSize: 11, marginTop: 10 }}>SQ FT</div>
        <MinMaxComponent />
      </div>
      <OtherFilter isFurnished={isFurnished} setIsFurnished={setIsFurnished} />
      <RelatedSearch
        isOneBedroom={isOneBedroom}
        setIsOneBedroom={setIsOneBedroom}
        isTwoBedroom={isTwoBedroom}
        setIsTwoBedroom={setIsTwoBedroom}
        isFurnished={isFurnished}
        setIsFurnished={setIsFurnished}
      />
    </div>
  );
}

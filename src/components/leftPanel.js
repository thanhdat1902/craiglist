import React from "react";
import CheckBoxFilter from "./checkBoxFilter";
import MaplocationFilter from "./mapLocationFilter";
import PriceFilter from "./priceFilter";
import MinMaxComponent from "./minMaxComponent";
import CalendarComponent from "./calendarComponent"
import RelatedSearch from "./relatedSearch"
import OtherFilter from "./otherFilter"

export default function LeftPanelFilter() {
  return (
    <div
      style={{
        width: "20vw",
        borderRight: "solid 1px black",
        padding: 10,
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
        <div style={{ fontSize: 11, marginTop: 10}}>BEDROOMS</div>
        <MinMaxComponent />
      </div>
      <div>
        <div style={{ fontSize: 11, marginTop: 10}}>BATHROOMS</div>
        <MinMaxComponent />
      </div>
      <div>
        <div style={{ fontSize: 11, marginTop: 10}}>SQ FT</div>
        <MinMaxComponent />
      </div>
      <OtherFilter />
      <CalendarComponent />
      <RelatedSearch />
    </div>
  );
}

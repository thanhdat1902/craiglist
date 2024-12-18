import React from "react";
import Header from "./header";
import ProductList from "./listProduct";

export default function MainContent({
  isOneBedroom,
  setIsOneBedroom,
  isTwoBedroom,
  setIsTwoBedroom,
  isFurnished,
  setIsFurnished,
  isPetFriendly,
  setIsPetFriendly,
}) {
  return (
    <>
      <div
        id="search-results-page-1"
        className="results cl-results-page"
        style={{
          position: "absolute",
          left: "22vw",
          border: "0px",
          margin: "0px 8px",
          padding: "0px",
          minHeight: "10px",
          overflow: "hidden",
          width: "70vw",
        }}
      >
        <Header />
        <ProductList
          isOneBedroom={isOneBedroom}
          isTwoBedroom={isTwoBedroom}
          isFurnished={isFurnished}
          isPetFriendly={isPetFriendly}
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
body {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  background-color: white;
  color: rgb(34, 34, 34);
  overflow-anchor: none;
}
`,
        }}
      />
    </>
  );
}

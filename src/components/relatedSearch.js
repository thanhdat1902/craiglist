import React, { useState } from "react";

export default function RelatedSearch({
  isOneBedroom,
  setIsOneBedroom,
  isTwoBedroom,
  setIsTwoBedroom,
  isFurnished,
  setIsFurnished,
  isPetFriendly,
  setIsPetFriendly,
}) {
  const [isShowRelatedSearch, setIsShowRelatedSearch] = useState(true);
  const handleClickShowRelatedSearch = () => {
    // setIsShowRelatedSearch(!isShowRelatedSearch);
  };
  const handleClickRelatedSearch = (relatedSearchString) => {
    // TODO: Not refresh page and keep filter
    if (relatedSearchString === "oneBedroom") {
      setIsOneBedroom((prev) => !prev);
    } else if (relatedSearchString === "twoBedroom") {
      setIsTwoBedroom((prev) => !prev);
    } else if (relatedSearchString === "furnished") {
      setIsFurnished((prev) => !prev);
    } else if (relatedSearchString === "petFriendly") {
      setIsPetFriendly((prev) => !prev);
    }
  };
  const links = [
    {
      label: "One bedroom apartments for rent",
      href: "https://losangeles.craigslist.org/search/one-bedroom-apartment",
      isActive: isOneBedroom,
      style: {
        fontWeight: isOneBedroom ? "bolder" : "normal",
        cursor: isOneBedroom ? "default" : "pointer",
      },
      relatedSearchString: "oneBedroom",
    },
    {
      label: "Two bedroom apartments for rent",
      href: "https://losangeles.craigslist.org/search/two-bedroom-apartment",
      isActive: isTwoBedroom,
      style: {
        fontWeight: isTwoBedroom ? "bolder" : "normal",
        cursor: isTwoBedroom ? "default" : "pointer",
      },
      relatedSearchString: "twoBedroom",
    },
    {
      label: "Furnished apartments for rent",
      href: "https://losangeles.craigslist.org/search/furnished-apartment",
      isActive: isFurnished,
      style: {
        fontWeight: isFurnished ? "bolder" : "normal",
        cursor: isFurnished ? "default" : "pointer",
      },
      relatedSearchString: "furnished",
    },
    {
      label: "Pet friendly apartments for rent",
      href: "https://losangeles.craigslist.org/search/pet-friendly-apartment",
      isActive: isPetFriendly,
      style: {
        fontWeight: isPetFriendly ? "bolder" : "normal",
        cursor: isPetFriendly ? "default" : "pointer",
      },
      relatedSearchString: "petFriendly",
    },
  ];
  return (
    <>
      <div
        className="cl-related-searches expanded"
        style={{
          margin: "0px",
          border: "0px",
          padding: "0px",
          flexShrink: 0,
          marginTop: "1em",
          fontSize: "0.9em",
          font: '14.4px "Open Sans", Helvetica, Arial, sans-serif',
        }}
      >
        <button
          className="bd-button title link-like"
          type="button"
          tabIndex="0"
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
            outline: "none",
            background: "white",
            border: "1px solid rgb(204, 204, 204)",
            borderRadius: "3px",
            display: "inline-flex",
            boxSizing: "content-box",
            WebkitBoxPack: "center",
            justifyContent: "center",
            WebkitBoxAlign: "center",
            alignItems: "center",
            minHeight: "1em",
            fontSize: "1em",
            lineHeight: "1em",
            color: "rgb(0, 0, 238)",
            cursor: "pointer",
            minWidth: "20px",
            margin: "0px",
            padding: "3px 0px",
            borderWidth: "0px",
            marginLeft: "0px",
            backgroundColor: "transparent",
          }}
          onClick={handleClickShowRelatedSearch}
        >
          <span
            className="icon icom-"
            style={{
              fontVariant: "normal",
              fontStyle: "normal",
              fontWeight: "normal",
              textTransform: "none",
              lineHeight: 1,
              WebkitFontSmoothing: "antialiased",
              backgroundImage: "none",
              display: "inherit",
              height: "auto",
              width: "auto",
              verticalAlign: "inherit",
              paddingRight: "8px",
              fontFamily: "icomoon",
            }}
          />
          <span className="label">filter presets</span>
        </button>
        {isShowRelatedSearch && (
          <div
            className="searches"
            style={{
              margin: "0px",
              border: "0px",
              padding: "0px",
              marginLeft: "1em",
              marginTop: "0.5em",
            }}
          >
            {links.map((link, index) => (
              <label
                key={index}
                className="cl-app-anchor text-only"
                tabIndex="0"
                style={{
                  textDecoration: "none",
                  WebkitBoxPack: "center",
                  justifyContent: "center",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  minHeight: "1em",
                  // color: "rgb(0, 0, 238)",
                  cursor: "pointer",
                  margin: "3px 3px 3px 0px",
                  padding: "3px 3px 3px 0px",
                  display: "block",
                }}
              >
                <input
                  type="checkbox"
                  checked={link.isActive}
                  onClick={() =>
                    handleClickRelatedSearch(link.relatedSearchString)
                  }
                ></input>
                <span
                  className="label"
                  onClick={() =>
                    handleClickRelatedSearch(link.relatedSearchString)
                  }
                  style={{
                    padding: "0px",
                    display: "inline-block",
                    ...link.style,
                  }}
                >
                  {link.label}
                </span>
              </label>
            ))}
          </div>
        )}
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

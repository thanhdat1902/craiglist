import React from "react";

export default function MapLocationFilter() {
  return (
    <>
      <div
        className="cl-jsonform-filter cl-jsonform-location jsonform-name-search_distance-postal"
        style={{
          margin: "0px",
          border: "0px",
          padding: "0px",
          position: "relative",
          marginTop: "1.2em",
          fontSize: "14.4px",
          font: '14.4px "Open Sans", Helvetica, Arial, sans-serif',
        }}
      >
        <div
          className="filter-label"
          style={{
            margin: "0px",
            border: "0px",
            padding: "0px",
            fontSize: "11.7px",
            textTransform: "uppercase",
          }}
        >
          miles from location
        </div>
        <div
          className="widget-line"
          style={{
            border: "0px",
            display: "flex",
            WebkitBoxAlign: "center",
            alignItems: "center",
            margin: "0px",
            padding: "0px",
            overflow: "hidden",
            width: "100%",
            boxSizing: "border-box",
            flexShrink: 1,
          }}
        >
          <input
            className="small"
            type="tel"
            placeholder="miles"
            style={{
              marginLeft: "0px",
              padding: "3px",
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "3px",
              fontSize: "13px",
              WebkitBoxFlex: "1",
              flexGrow: 1,
              flexShrink: 1,
              width: "1em",
            }}
          />
          <input
            className="small"
            name="postal"
            type="tel"
            placeholder="from zip"
            style={{
              marginLeft: "5px",
              padding: "3px",
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "3px",
              fontSize: "13px",
              WebkitBoxFlex: "1",
              flexGrow: 1,
              flexShrink: 1,
              width: "1em",
            }}
          />
        </div>
        <button
          className="bd-button text-only use-map link-like"
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
            backgroundColor: "transparent",
            marginLeft: "0px",
            marginTop: "0px",
          }}
        >
          <span>use map...</span>
        </button>
        <input
          name="search_distance"
          type="hidden"
          style={{ marginLeft: "5px" }}
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

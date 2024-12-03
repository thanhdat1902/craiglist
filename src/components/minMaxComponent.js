import React from "react";

export default function MinMaxComponent() {
  return (
    <>
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
          fontSize: "14.4px",
          font: '14.4px "Open Sans", Helvetica, Arial, sans-serif',
        }}
      >
        <input
          className="small"
          name="min_bathrooms"
          type="tel"
          placeholder="min"
          title="whole number, no letters or symbols"
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
            maxWidth: "7em",
          }}
        />
        <span className="hyphen" style={{ marginLeft: "4px" }}>
          -
        </span>
        <input
          className="small"
          name="max_bathrooms"
          type="tel"
          placeholder="max"
          title="whole number, no letters or symbols"
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
            maxWidth: "7em",
          }}
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

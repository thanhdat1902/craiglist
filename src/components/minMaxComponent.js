import React, { useState, useEffect } from "react";

export default function MinMaxComponent({
  isOneBedroom,
  setIsOneBedroom,
  isTwoBedroom,
  setIsTwoBedroom,
}) {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    if (!setIsOneBedroom) return;

    if (isOneBedroom && !(min === "1" && max === "1")) {
      setIsOneBedroom(false);
    } else if (!isOneBedroom && min === "1" && max === "1") {
      setIsOneBedroom(true);
    }
  }, [min, max]);

  useEffect(() => {
    if (!setIsOneBedroom) return;

    if (isOneBedroom) {
      setMin("1");
      setMax("1");
    }
  }, [isOneBedroom]);

  useEffect(() => {
    if (!setIsTwoBedroom) return;

    if (isTwoBedroom && !(min === "2" && max === "2")) {
      setIsTwoBedroom(false);
    } else if (!isTwoBedroom && min === "2" && max === "2") {
      setIsTwoBedroom(true);
    }
  }, [min, max]);

  useEffect(() => {
    if (!setIsTwoBedroom) return;

    if (isTwoBedroom) {
      setMin("2");
      setMax("2");
    }
  }, [isTwoBedroom]);

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
          value={min}
          onChange={(e) => setMin(e.target.value)}
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
          value={max}
          onChange={(e) => setMax(e.target.value)}
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

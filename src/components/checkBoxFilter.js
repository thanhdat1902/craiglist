import React from "react";

export default function CheckBoxFilter() {
  return (
    <>
      <div
        className="cl-jsonform-filter cl-jsonform-group jsonform-name-srchType-hasPic-postedToday-showDuplicates"
        style={{
          margin: "0px",
          border: "0px",
          padding: "0px",
          marginTop: "10px",
          position: "relative",
          fontSize: "14.4px",
          font: '14.4px "Open Sans", Helvetica, Arial, sans-serif',
        }}
      >
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-srchType"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="srchType"
            type="checkbox"
            value="T"
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
              position: "relative",
              bottom: "1px",
            }}
          />
          search titles only
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-hasPic"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="hasPic"
            type="checkbox"
            value="1"
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
              position: "relative",
              bottom: "1px",
            }}
          />
          has image
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-postedToday"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="postedToday"
            type="checkbox"
            value="1"
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
              position: "relative",
              bottom: "1px",
            }}
          />
          posted today
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-showDuplicates"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="showDuplicates"
            type="checkbox"
            value="1"
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
              position: "relative",
              bottom: "1px",
            }}
          />
          show duplicates
        </label>
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

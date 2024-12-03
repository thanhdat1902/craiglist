import React from "react";

export default function CalendarComponent() {
  return (
    <>
      <div
        className="cl-jsonform-filter cl-jsonform-date-picker jsonform-name-sale_date"
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
          open house date
        </div>
        <table
          className="cl-calendar"
          style={{ borderSpacing: "0px", borderCollapse: "collapse" }}
        >
          <tbody>
            <tr className="day-header">
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  backgroundColor: "rgb(221, 221, 221)",
                  fontSize: "110%",
                  borderBottomColor: "rgb(204, 204, 204)",
                }}
              >
                S
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  backgroundColor: "rgb(221, 221, 221)",
                  fontSize: "110%",
                  borderBottomColor: "rgb(204, 204, 204)",
                }}
              >
                M
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  backgroundColor: "rgb(221, 221, 221)",
                  fontSize: "110%",
                  borderBottomColor: "rgb(204, 204, 204)",
                }}
              >
                T
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  backgroundColor: "rgb(221, 221, 221)",
                  fontSize: "110%",
                  borderBottomColor: "rgb(204, 204, 204)",
                }}
              >
                W
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  backgroundColor: "rgb(221, 221, 221)",
                  fontSize: "110%",
                  borderBottomColor: "rgb(204, 204, 204)",
                }}
              >
                T
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  backgroundColor: "rgb(221, 221, 221)",
                  fontSize: "110%",
                  borderBottomColor: "rgb(204, 204, 204)",
                }}
              >
                F
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  backgroundColor: "rgb(221, 221, 221)",
                  fontSize: "110%",
                  borderBottomColor: "rgb(204, 204, 204)",
                }}
              >
                S
              </td>
            </tr>
            <tr className="week">
              <td
                className="disabled"
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(102, 102, 102)",
                  backgroundColor: "rgb(221, 221, 221)",
                  cursor: "default",
                }}
              >
                1
              </td>
              <td
                className="disabled"
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(102, 102, 102)",
                  backgroundColor: "rgb(221, 221, 221)",
                  cursor: "default",
                }}
              >
                2
              </td>
              <td
                className="today"
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                  borderColor: "black",
                }}
              >
                3
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                4
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                5
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                6
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                7
              </td>
            </tr>
            <tr className="week">
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                8
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                9
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                10
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                11
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                12
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                13
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                14
              </td>
            </tr>
            <tr className="week">
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                15
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                16
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                17
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                18
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                19
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                20
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                21
              </td>
            </tr>
            <tr className="week">
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                22
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                23
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                24
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                25
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                26
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                27
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                28
              </td>
            </tr>
            <tr className="week">
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                29
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                30
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                31
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                1
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                2
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                3
              </td>
              <td
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  padding: "3px",
                  textAlign: "center",
                  color: "rgb(0, 0, 238)",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                4
              </td>
            </tr>
          </tbody>
        </table>
        <input name="sale_date" type="hidden" style={{ marginLeft: "5px" }} />
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

import React from "react";

export default function PriceFilter() {
  return (
    <>
      <div
        className="jsonform-name-bar-chart-widget cl-jsonform-filter cl-jsonform-bar-chart-widget"
        style={{
          margin: "0px",
          border: "0px",
          padding: "0px",
          paddingTop: "6px",
          marginLeft: "-8px",
          paddingLeft: "8px",
          paddingRight: "6px",
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
          price
        </div>
        <a
          className="filter-clear-reset-button"
          style={{
            textDecoration: "none",
            color: "rgb(0, 0, 238)",
            position: "absolute",
            top: "6px",
            right: "6px",
            cursor: "pointer",
            fontSize: "12px",
            display: "none",
          }}
        >
          clear
        </a>
        <a
          className="filter-clear-reset-button"
          style={{
            textDecoration: "none",
            color: "rgb(0, 0, 238)",
            position: "absolute",
            top: "6px",
            right: "6px",
            cursor: "pointer",
            fontSize: "12px",
            display: "none",
          }}
        >
          reset
        </a>
        <input name="min_price" type="hidden" style={{ marginLeft: "5px" }} />
        <input name="max_price" type="hidden" style={{ marginLeft: "5px" }} />
        <div
          className="cl-bar-chart-widget"
          style={{ margin: "0px", border: "0px", padding: "0px" }}
        >
          <div
            className="cl-bar-chart-control"
            style={{ margin: "0px", border: "0px", padding: "0px" }}
          >
            <div
              className="input-fields"
              style={{ margin: "0px", border: "0px", padding: "0px" }}
            >
              <div
                className="range-inputs"
                style={{
                  margin: "0px",
                  border: "0px",
                  padding: "0px 0px 6px",
                  fontSize: "11px",
                }}
              >
                <span>$</span>
                <input
                  type="text"
                  placeholder="min"
                  style={{
                    borderRadius: "3px",
                    border: "1px solid rgb(204, 204, 204)",
                    width: "56px",
                    marginLeft: "2px",
                  }}
                />
                <span> – $</span>
                <input
                  type="text"
                  placeholder="max"
                  style={{
                    borderRadius: "3px",
                    border: "1px solid rgb(204, 204, 204)",
                    width: "56px",
                    marginLeft: "2px",
                  }}
                />
              </div>
            </div>
            <div
              className="chart-container"
              style={{
                margin: "0px",
                border: "0px",
                padding: "0px",
                position: "relative",
                height: "110px",
                width: "179px",
              }}
            >
              <svg
                className="bars"
                height="57"
                width="149"
                style={{ position: "absolute", top: "28px" }}
              >
                <rect
                  className="bar"
                  height="2.381615598885794"
                  width="10.636363636363637"
                  x="5"
                  y="54.618384401114206"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="0.1852367688022284"
                  width="10.636363636363637"
                  x="17.636363636363637"
                  y="56.81476323119777"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="1.4025069637883008"
                  width="10.636363636363637"
                  x="30.272727272727273"
                  y="55.5974930362117"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="3.493036211699164"
                  width="10.636363636363637"
                  x="42.90909090909091"
                  y="53.50696378830084"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="17.78272980501393"
                  width="10.636363636363637"
                  x="55.54545454545455"
                  y="39.21727019498607"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="40.46100278551532"
                  width="10.636363636363637"
                  x="68.18181818181819"
                  y="16.53899721448468"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="57"
                  width="10.636363636363637"
                  x="80.81818181818181"
                  y="0"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="44.93314763231198"
                  width="10.636363636363637"
                  x="93.45454545454545"
                  y="12.066852367688021"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="36.25348189415042"
                  width="10.636363636363637"
                  x="106.0909090909091"
                  y="20.74651810584958"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="21.381615598885794"
                  width="10.636363636363637"
                  x="118.72727272727273"
                  y="35.618384401114206"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
                <rect
                  className="bar"
                  height="13.125348189415043"
                  width="10.636363636363637"
                  x="131.36363636363637"
                  y="43.87465181058496"
                  style={{ fill: "rgb(28, 100, 172)" }}
                />
              </svg>
              <svg
                className="xaxis"
                height="110"
                width="149"
                style={{
                  position: "absolute",
                  overflow: "visible",
                  userSelect: "none",
                  fontSize: "10px",
                }}
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerHeight="7"
                    markerWidth="10"
                    orient="auto"
                    refX="0"
                    refY="3.5"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" />
                  </marker>
                </defs>
                <g transform="translate(5, 0)">
                  <g transform="translate(0, 85)">
                    <text className="tick" textAnchor="middle" y="17">
                      $0
                    </text>
                    <line
                      className="tickmark"
                      y1="0"
                      y2="5"
                      style={{ stroke: "black" }}
                    />
                  </g>
                  <g transform="translate(38.050917054475775, 85)">
                    <text className="tick" textAnchor="middle" y="17">
                      $1k
                    </text>
                    <line
                      className="tickmark"
                      y1="0"
                      y2="5"
                      style={{ stroke: "black" }}
                    />
                  </g>
                  <g transform="translate(76.10183410895155, 85)">
                    <text className="tick" textAnchor="middle" y="17">
                      $2k
                    </text>
                    <line
                      className="tickmark"
                      y1="0"
                      y2="5"
                      style={{ stroke: "black" }}
                    />
                  </g>
                  <g transform="translate(114.15275116342733, 85)">
                    <text className="tick" textAnchor="middle" y="17">
                      $3k
                    </text>
                    <line
                      className="tickmark"
                      y1="0"
                      y2="5"
                      style={{ stroke: "black" }}
                    />
                  </g>
                  <line
                    className="arrowhead"
                    markerEnd="url(#arrowhead)"
                    x1="0"
                    x2="139"
                    y1="85"
                    y2="85"
                    style={{ stroke: "black" }}
                  />
                  <text
                    className="abs-max-price"
                    textAnchor="start"
                    x="149"
                    y="89"
                  >
                    $33.8k
                  </text>
                </g>
              </svg>
              <svg
                className="average"
                height="110"
                width="149"
                style={{
                  position: "absolute",
                  userSelect: "none",
                  fontSize: "11px",
                }}
              >
                <text
                  className="avg-text"
                  textAnchor="middle"
                  x="93.75923577593439"
                  y="14"
                >
                  avg: $2,333
                </text>
                <line
                  className="line"
                  strokeDasharray="3,3"
                  x1="93.75923577593439"
                  x2="93.75923577593439"
                  y1="20"
                  y2="85"
                  style={{ stroke: "rgb(170, 170, 170)" }}
                />
              </svg>
              <svg
                className="sliders"
                height="85"
                width="149"
                style={{ position: "absolute" }}
              >
                <rect
                  className="selection"
                  height="62.7"
                  width="139"
                  x="-995"
                  y="22.299999999999997"
                  style={{
                    cursor: "grab",
                    fill: "rgb(151, 183, 232)",
                    fillOpacity: 0.4,
                  }}
                />
                <g
                  className="handle left-handle"
                  transform="translate(-995, 22.299999999999997)"
                  style={{ cursor: "ew-resize" }}
                >
                  <rect
                    className="grab-area"
                    height="62.7"
                    width="20"
                    fill="transparent"
                    x="-19"
                  />
                  <line
                    className="edge"
                    y2="62.7"
                    style={{ stroke: "rgb(151, 183, 232)" }}
                  />
                  <g transform="translate(0, 18.85)">
                    <path
                      className="grab-handle"
                      d="M0,0 L3,0 L4,1 L4,24 L3,25 L0,25  M2,4 L2,21"
                      style={{
                        stroke: "rgb(102, 102, 102)",
                        fill: "rgb(238, 238, 238)",
                        transform: "scale(-1, 1)",
                      }}
                    />
                  </g>
                </g>
                <g
                  className="handle right-handle"
                  transform="translate(-856, 22.299999999999997)"
                  style={{ cursor: "ew-resize" }}
                >
                  <rect
                    className="grab-area"
                    height="62.7"
                    width="20"
                    fill="transparent"
                    x="-1"
                  />
                  <line
                    className="edge"
                    y2="62.7"
                    style={{ stroke: "rgb(151, 183, 232)" }}
                  />
                  <g transform="translate(0, 18.85)">
                    <path
                      className="grab-handle"
                      d="M0,0 L3,0 L4,1 L4,24 L3,25 L0,25  M2,4 L2,21"
                      style={{
                        stroke: "rgb(102, 102, 102)",
                        fill: "rgb(238, 238, 238)",
                      }}
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
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

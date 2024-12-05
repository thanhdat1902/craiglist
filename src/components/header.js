import React from "react";

export default function Header() {
  return (
    <>
      <div
        className="cl-query-bar"
        style={{
          margin: "0px",
          border: "0px",
          padding: "5px 8px",
          display: "flex",
          backgroundColor: "white",
          top: "0px",
          left: "22vw",
          right: "0px",
          zIndex: 5998,
          position: "fixed",
        }}
      >
        <div
          className="cl-query-with-search-suggest bd-combo-box bd-vStat-valid empty"
          style={{
            margin: "5px",
            border: "1px solid rgb(204, 204, 204)",
            padding: "3px",
            outline: "none",
            background: "white",
            display: "inline-flex",
            WebkitBoxAlign: "stretch",
            alignItems: "stretch",
            color: "rgb(34, 34, 34)",
            borderRadius: "3px",
            marginLeft: "0px",
            WebkitBoxFlex: "1",
            flexGrow: 1,
          }}
        >
          <div
            className="bd-posit-box"
            style={{
              margin: "0px",
              border: "0px",
              padding: "0px",
              flexBasis: "auto",
              WebkitBoxFlex: "1",
              flexGrow: 1,
              display: "flex",
              WebkitBoxPack: "justify",
              justifyContent: "space-between",
              WebkitBoxAlign: "center",
              alignItems: "center",
            }}
          >
            <div
              className="decoration cl-search"
              style={{
                margin: "0px",
                border: "0px",
                padding: "3px",
                color: "rgb(187, 187, 187)",
              }}
            >
              <span
                className="icom-"
                style={{
                  fontVariant: "normal",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  textTransform: "none",
                  lineHeight: 1,
                  WebkitFontSmoothing: "antialiased",
                  fontFamily: "icomoon",
                }}
              />
            </div>
            <input
              autoComplete="off"
              placeholder="search apartments / housing for rent"
              tabIndex="0"
              style={{
                marginLeft: "5px",
                border: "0px",
                borderRadius: "4px",
                background: "white",
                outline: "none",
                width: "1em",
                WebkitBoxFlex: "1",
                flexGrow: 1,
                fontSize: "16px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "19.2px",
                color: "rgb(34, 34, 34)",
              }}
            />
          </div>
        </div>
        <button
          className="bd-button icon-only cl-exec-search"
          type="submit"
          tabIndex="0"
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
            outline: "none",
            background: "white",
            margin: "5px",
            padding: "8px",
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
            marginLeft: "5px",
            cursor: "pointer",
            minWidth: "20px",
            marginRight: "0px",
          }}
        >
          &#128269;
        </button>
        <button
          className="bd-button icon-only cl-save-search"
          type="button"
          tabIndex="0"
          title="save this search"
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
            outline: "none",
            background: "white",
            margin: "5px",
            padding: "8px",
            border: "1px solid rgb(204, 204, 204)",
            borderRadius: "3px",
            boxSizing: "content-box",
            WebkitBoxPack: "center",
            justifyContent: "center",
            WebkitBoxAlign: "center",
            alignItems: "center",
            minHeight: "1em",
            fontSize: "1em",
            lineHeight: "1em",
            color: "rgb(0, 0, 238)",
            marginLeft: "5px",
            cursor: "pointer",
            minWidth: "20px",
            display: "none",
          }}
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
              padding: "0px",
              paddingRight: "0px",
              fontFamily: "icomoon",
            }}
          />
        </button>
        <button
          className="bd-button icon-only cl-show-search-menu"
          type="button"
          tabIndex="0"
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
            outline: "none",
            background: "white",
            margin: "5px",
            padding: "8px",
            borderRadius: "3px",
            boxSizing: "content-box",
            WebkitBoxPack: "center",
            justifyContent: "center",
            WebkitBoxAlign: "center",
            alignItems: "center",
            minHeight: "1em",
            lineHeight: "1em",
            color: "rgb(0, 0, 238)",
            marginLeft: "5px",
            cursor: "pointer",
            minWidth: "20px",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "24px",
            marginRight: "0px",
            display: "none",
          }}
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
              padding: "0px",
              paddingRight: "0px",
              fontFamily: "icomoon",
            }}
          />
        </button>
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

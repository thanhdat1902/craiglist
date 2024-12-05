import React, { useState, useEffect } from "react";

export default function OtherFilter({
  isFurnished,
  setIsFurnished,
  isPetFriendly,
  setIsPetFriendly,
}) {
  const [isDogFriendly, setIsDogFriendly] = useState(false);
  const [isCatFriendly, setIsCatFriendly] = useState(false);

  useEffect(() => {
    if (!setIsPetFriendly) return;

    if (isPetFriendly && !isDogFriendly && !isCatFriendly) {
      setIsPetFriendly(false);
    } else if (!isPetFriendly && (isDogFriendly || isCatFriendly)) {
      setIsPetFriendly(true);
    }
  }, [isDogFriendly, isCatFriendly]);

  useEffect(() => {
    if (!setIsPetFriendly) return;

    if (isPetFriendly) {
      if (!(isCatFriendly || isDogFriendly)) {
        setIsCatFriendly(true);
        setIsDogFriendly(true);
      }
    }
  }, [isPetFriendly]);

  return (
    <>
      <div
        className="cl-jsonform-filter cl-jsonform-group jsonform-name-pets_cat-pets_dog-is_furnished-no_smoking-wheelchaccess-airconditioning-ev_charging-broker_fee-application_fee"
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
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-pets_cat"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="pets_cat"
            type="checkbox"
            checked={isCatFriendly}
            onChange={() => setIsCatFriendly((prev) => !prev)}
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
              position: "relative",
              bottom: "1px",
            }}
          />
          cats ok
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-pets_dog"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="pets_dog"
            type="checkbox"
            checked={isDogFriendly}
            onChange={() => setIsDogFriendly((prev) => !prev)}
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
              position: "relative",
              bottom: "1px",
            }}
          />
          dogs ok
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-is_furnished"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="is_furnished"
            type="checkbox"
            checked={isFurnished}
            onChange={() => setIsFurnished((prev) => !prev)}
            style={{
              marginLeft: "0px",
              cursor: "pointer",
              verticalAlign: "middle",
              position: "relative",
              bottom: "1px",
            }}
          />
          furnished
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-no_smoking"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="no_smoking"
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
          no smoking
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-wheelchaccess"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="wheelchaccess"
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
          wheelchair accessible
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-airconditioning"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="airconditioning"
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
          air conditioning
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-ev_charging"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="ev_charging"
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
          EV charging
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-broker_fee"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="broker_fee"
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
          no broker fee
        </label>
        <label
          className="cl-jsonform-filter cl-jsonform-bool jsonform-name-application_fee"
          style={{
            cursor: "pointer",
            display: "block",
            position: "relative",
            marginTop: "3px",
          }}
        >
          <input
            name="application_fee"
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
          no application fee
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

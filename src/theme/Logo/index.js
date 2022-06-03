import React from "react";

export default function LogoWrapper() {
  return (
    <>
      <div
        style={{ cursor: "pointer", marginRight: 25 }}
        onClick={() => (location.href = "/")}
      >
        <span
          style={{
            fontFamily: "Roboto",
            fontSize: "22px",
            color: "#28A745",
          }}
        >
          Nucleoid
        </span>
        &nbsp;
        <span
          style={{
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "lighter",
            color: "#dfdfdf",
          }}
        >
          Beta
        </span>
      </div>
    </>
  );
}

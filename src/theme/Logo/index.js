import React from "react";

export default function LogoWrapper() {
  return (
    <>
      <div
        style={{ cursor: "pointer", marginRight: 25 }}
        onClick={() => (location.href = "https://nucleoid.ai")}
      >
        <span
          style={{
            fontFamily: "Roboto",
            fontSize: "22px",
            color: "#209958",
          }}
        >
          Nucleoid
        </span>
        &nbsp;
        <span className={"neon"}>Beta</span>
      </div>
    </>
  );
}

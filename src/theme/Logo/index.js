import Link from "@docusaurus/Link";
import React from "react";

export default function LogoWrapper() {
  return (
    <>
      <div style={{ marginRight: 25 }}>
        <Link to={"/"}>
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
        </Link>
      </div>
    </>
  );
}

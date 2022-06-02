import React from "react";
import { Box, Typography } from "@mui/material";

function Logo() {
  const navigate = () => {};
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingBottom: {
          xs: 0,
          md: 0.5,
        },
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
      <Typography fontSize={"22px"} color={"#28a745"}>
        Nucleoid
      </Typography>
      &nbsp;
      <Typography fontSize={"15px"} color={"#dfdfdf"} fontWeight={"lighter"}>
        <sub>Beta</sub>
      </Typography>
    </Box>
  );
}

export default Logo;

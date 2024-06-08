import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import StarUsMessageDialog from "./StarUsMessageDialog";
import TwitterIcon from "@mui/icons-material/Twitter";
import WeekCalendar from "../components/WeekCalendar";

import { Box, IconButton } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box className={"footer"}>
        <WeekCalendar />
        Nucleoid
        <Box>
          <IconButton
            onClick={() =>
              window.open("https://discord.gg/eWXFCCuU5y", "_blank")
            }
          ></IconButton>
          <IconButton
            onClick={() =>
              window.open("https://twitter.com/NucleoidAI", "_blank")
            }
          >
            <TwitterIcon style={{ fill: "#ffffff" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://github.com/NucleoidAI/Nucleoid", "_blank")
            }
          >
            <GitHubIcon style={{ fill: "#ffffff" }} />
          </IconButton>
        </Box>
      </Box>
      <StarUsMessageDialog />
    </footer>
  );
}

export default Footer;

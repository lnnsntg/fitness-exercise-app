import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import React from "react";

const BodyPart = () => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    >
      <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    </Stack>
  );
};

export default BodyPart;

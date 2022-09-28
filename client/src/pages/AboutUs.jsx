import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const NavigateTo = useNavigate();
  return (
    <div>
      <Box display={"flex"} alignItems="center" flexDirection={"column"}>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h4">
          This Is A Crud Application & My First Mern Stack Project Also
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          By MERN STACK
        </Typography>
        <Button variant="outlined"
          onClick={() => {
            NavigateTo("/books");
          }}
        >
          Home
        </Button>
      </Box>
    </div>
  );
}

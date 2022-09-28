import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Books.css";

export default function Home() {
  const NavigateTo = useNavigate();
  return (
    <div>
      <Box display={"flex"} flexDirection="column" alignItems={"center"}>
        <Button
          className="home"
          sx={{ marginTop: "10rem", background: "orangered" }}
          variant="contained"
          onClick={() => {
            NavigateTo("/books");
          }}
        >
          <Typography variant="h3">View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
}

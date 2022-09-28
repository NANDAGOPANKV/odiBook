import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

// axios
import Axios from "axios";
import React, { useState } from "react";
// useNavigate
import { useNavigate } from "react-router-dom";
// url
import { URLBOOK } from "../static/URLs";

// main Function
export default function AddBooks() {
  const NavigateTo = useNavigate();
  const [cheked, setCheked] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    auther: "",
    description: "",
    image: "",
    price: "",
  });

  // form submiting settingup
  const handleFormSubmit = (e) => {
    setInputs((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };
  // send request to mongodb
  const handleSendRequest = async () => {
    await Axios.post(URLBOOK, {
      name: String(inputs.name),
      auther: String(inputs.auther),
      description: String(inputs.description),
      image: String(inputs.image),
      price: String(inputs.price),
      avilable: String(cheked),
    }).then((res) => res.data);
  };

  // form submiting
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Here");
    console.log(inputs, cheked);
    console.log("add here");
    handleSendRequest().then(NavigateTo("/")).then(NavigateTo("/books"));
  };

  // return
  return (
    <form style={{ margin: "15px" }} onSubmit={handleSubmitForm}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        alignContent="center"
        alignSelf={"center"}
        margin={"auto"}
        maxWidth={600}
        marginTop={"3rem"}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleFormSubmit}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.auther}
          onChange={handleFormSubmit}
          margin="normal"
          fullWidth
          variant="outlined"
          name="auther"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleFormSubmit}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleFormSubmit}
          margin="normal"
          type="number"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleFormSubmit}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />

        <FormControlLabel
          onChange={handleFormSubmit}
          control={
            <Checkbox checked={cheked} onClick={() => setCheked(!cheked)} />
          }
          label="Available"
        />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
}

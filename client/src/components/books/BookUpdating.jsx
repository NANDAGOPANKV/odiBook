import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URLBOOK } from "../../static/URLs";

export default function BookDetails() {
  // useNavigate
  const NavigateTo = useNavigate();
  const id = useParams().id;
  const [inputs, setInputs] = useState({});
  const [cheked, setCheked] = useState(false);

  console.log(id);
  useEffect(() => {
    const handleGetId = async () => {
      await axios
        .get(`${URLBOOK}/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    handleGetId();
    // then((data) => setInputs(data.book));
  }, [id]);

  // Sending Data To The DB
  const sendRequest = async () => {
    await axios
      .put(`${URLBOOK}/${id}`, {
        name: String(inputs.name),
        auther: String(inputs.auther),
        description: String(inputs.description),
        image: String(inputs.image),
        price: String(inputs.price),
        avilable: String(cheked),
      })
      .then((res) => res.data);
  };

  // call the sendRequest
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("data");
    sendRequest();
    NavigateTo("/books");
  };

  // form submiting settingup
  const handleFormSubmit = (e) => {
    setInputs((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(inputs);

  return (
    <div>
      <Button
        style={{ margin: "10px" }}
        variant="contained"
        onClick={() => {
          NavigateTo("/books");
        }}
      >
        Go back
      </Button>
      {inputs && (
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
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}

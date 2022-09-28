import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { URLBOOK } from "../../static/URLs";
// useNavigate
import { useNavigate } from "react-router-dom";
// css
import "../../styles/Books.css";

export default function Books(props) {
  // useNavigate
  const { _id, name, auther, description, image, price, avilable } = props.data;
  const Navigate = useNavigate();
  const handleDeleteBook = async () => {
    await axios
      .delete(`${URLBOOK}/${_id}`)
      .then((res) => res.data)
      .then(() => Navigate("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt="imagenothere" />
      <article>By: {auther}</article>
      <h3>{name}</h3>
      <h6>{description}</h6>
      <h3>Price {price}</h3>
      <p>availability {avilable ? <b>Limited</b> : "Not Available"}</p>
      <div className="btn">
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
          UPDATE
        </Button>
        <Button onClick={handleDeleteBook} sx={{ mt: "auto" }}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [addbook, setAddbook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const hangleChange = (e) => {
    setAddbook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/books", addbook);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(addbook);
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={hangleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={hangleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={hangleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={hangleChange}
        name="cover"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;

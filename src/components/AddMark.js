import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { API } from "../api/api";

const AddMark = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    email: "",
    image: "",
    Tam: "",
    Eng: "",
    Sci: "",
    Soc: "",
    Math: "",
  });
  const navigate = useNavigate();
  const onAdd = (newStudent) => {
    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/"));
  };
  return (
    <div>
      <Form type={"Add"} studentDetails={studentDetails} onSubmit={onAdd} />
    </div>
  );
};

export default AddMark;
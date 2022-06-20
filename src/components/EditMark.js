import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";
import { API } from "../api/api";

const EditMark = () => {
  const { id } = useParams();

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

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setStudentDetails({
          name: data.name,
          email: data.email,
          image: data.image,
          Tam: data.Tam,
          Eng: data.Eng,
          Sci: data.Sci,
          Soc: data.Soc,
          Math: data.Math,
        })
      );
  }, []);
  const navigate = useNavigate();
  const onEdit = (updatedData) => {
    fetch(`${API}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/"));
  };
  return (
    <div>
      <Form type={"Edit"} studentDetails={studentDetails} onSubmit={onEdit} />
    </div>
  );
};

export default EditMark;
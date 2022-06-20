import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as yup from "yup";
import { useFormik } from "formik";

const formValidationSchema = yup.object({
  name: yup.string().required("Please enter a Name"),
  email: yup.string().required("Please provide email address"),
  Tam: yup
    .number()
    .typeError("Must be number")
    .required("Please enter mark")
    .min(0)
    .max(100),
  Eng: yup
    .number()
    .typeError("Must be number")
    .required("Please enter mark")
    .min(0)
    .max(100),
  Sci: yup
    .number()
    .typeError("Must be number")
    .required("Please enter mark")
    .min(0)
    .max(100),
  Soc: yup
    .number()
    .typeError("Must be number")
    .required("Please enter mark")
    .min(0)
    .max(100),
  Math: yup
    .number()
    .typeError("Must be number")
    .required("Please enter mark")
    .min(0)
    .max(100),
});

const Form = ({ onSubmit, type, studentDetails }) => {
  const { handleSubmit, handleChange, errors, handleBlur, touched, values } =
    useFormik({
      initialValues: {
        name: studentDetails.name,
        email: studentDetails.email,
        image: studentDetails.image,
        Tam: studentDetails.Tam,
        Eng: studentDetails.Eng,
        Sci: studentDetails.Sci,
        Soc: studentDetails.Soc,
        Math: studentDetails.Math,
      },
      enableReinitialize: `${type === "Add" ? false : true}`,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        let { Tam, Eng, Sci, Soc, Math } = values;
        Tam = +Tam;
        Eng = +Eng;
        Sci = +Sci;
        Soc = +Soc;
        Math = +Math;
        const data = { ...values, Tam, Eng, Sci, Soc, Math };
        // console.log(values);
        onSubmit(data);
      },
    });
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {type === "Add" ? "Add" : "Edit"} Student Details
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={errors.name && touched.name ? true : false}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  onBlur={handleBlur}
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  error={errors.email && touched.email ? true : false}
                  helperText={errors.email && touched.email ? errors.email : ""}
                  onChange={handleChange}
                  value={values.email}
                  fullWidth
                  id="email"
                  label="Email Address"
                  onBlur={handleBlur}
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.image && touched.image ? true : false}
                  helperText={errors.image && touched.image ? errors.image : ""}
                  onChange={handleChange}
                  value={values.image}
                  fullWidth
                  id="image"
                  label="Profile Picture"
                  onBlur={handleBlur}
                  name="image"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  error={errors.Tam && touched.Tam ? true : false}
                  helperText={errors.Tam && touched.Tam ? errors.Tam : ""}
                  onChange={handleChange}
                  value={values.Tam}
                  fullWidth
                  id="tam"
                  label="Tamil Mark"
                  onBlur={handleBlur}
                  name="Tamil"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  error={errors.Eng && touched.Eng ? true : false}
                  helperText={errors.Eng && touched.Eng ? errors.Eng : ""}
                  onChange={handleChange}
                  value={values.Eng}
                  fullWidth
                  id="eng"
                  label="English Mark"
                  onBlur={handleBlur}
                  name="Eng"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  error={errors.Sci && touched.Sci ? true : false}
                  helperText={errors.Sci && touched.Sci ? errors.Sci : ""}
                  onChange={handleChange}
                  value={values.Sci}
                  fullWidth
                  id="sci"
                  label="Science Mark"
                  onBlur={handleBlur}
                  name="Sci"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errors.Soc && touched.Soc ? true : false}
                  helperText={errors.Soc && touched.Soc ? errors.Soc : ""}
                  onChange={handleChange}
                  value={values.Soc}
                  fullWidth
                  id="soc"
                  label="Social Mark"
                  onBlur={handleBlur}
                  name="Soc"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errors.Math && touched.Math ? true : false}
                  helperText={errors.Math && touched.Math ? errors.Math : ""}
                  onChange={handleChange}
                  value={values.Math}
                  fullWidth
                  id="math"
                  label="Math Mark"
                  onBlur={handleBlur}
                  name="Math"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {type === "Add" ? "Add" : "Edit"}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Form;
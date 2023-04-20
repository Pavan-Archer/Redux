import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../action";
import { Paper, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import AfterLogin from "./AfterLogin";

const Login = () => {
  const [afterLogin, setAfterLogin] = useState(false);
  const [beforeLogin, setBeforeLogin] = useState(true);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      login: state.rootReducer.loginReducer,
    };
  });

  const { login } = state;
  // console.log("login payload", login);

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 350,
    margin: "30px auto",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log("Form data", values);
      const LoginName = values.userName;
      const LoginPwd = values.password;
      dispatch(loginRequest(LoginName, LoginPwd));
    },
  });

  let loginMessage = login.loginResult.message;
  // console.log(loginMessage);

  //--------------- Life Cycle ---------------

  useEffect(() => {
    let kctoken = login.loginResult.accessToken;

    if (loginMessage === "Login successful") {
      localStorage.setItem("access", kctoken);
      // console.log(localStorage);
      setAfterLogin(true);
      setBeforeLogin(false);
    } else {
      setAfterLogin(false);
      setBeforeLogin(true);
    }
  }, [loginMessage]);

  return (
    <>
      {beforeLogin && (
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h4 style={{ color: "#1daedf" }}>LOGIN</h4>
          </Grid>
          <TextField
            style={{ marginBottom: "20px" }}
            fullWidth
            id="outlined-basic"
            label="Username"
            name="userName"
            variant="outlined"
            required
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            onClick={formik.handleSubmit}
            disabled={!formik.isValid}
            style={{
              width: "100%",
              paddingTop: "20",
              marginTop: "30px",
              background: "#1daedf",
            }}
          >
            {" "}
            LOGIN
          </Button>
          <p
            style={{ marginTop: "40px", fontSize: "14px", color: "#0000008a" }}
          >
            Copyright © 2022
          </p>
          <span
            style={{ marginTop: "40px", fontSize: "14px", color: "#0000008a" }}
          >
            All rights reserved.
          </span>
        </Paper>
      )}
      {afterLogin && <AfterLogin />}
    </>
  );
};

export default Login;

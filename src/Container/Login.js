import React, { useState } from "react";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import * as yup from "yup";
import { Formik, Form, useFormik, Field } from "formik";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("Login");
  const [reset, setReset] = useState(false);
  const history = useHistory()

  let schemaObj, initVal;
  if (reset) {
    schemaObj = {
      email: yup
        .string()
        .email("Please Enter Valid Email")
        .required("Plaese Enter Email"),
    };
    initVal = {
      email: "",
    };
  } else {
    if (userType === "Login") {
      schemaObj = {
        email: yup
          .string()
          .email("Please Enter Valid Email")
          .required("Plaese Enter Email"),
        password: yup.string().required("Please Enter Password"),
      };
      initVal = {
        email: "",
        password: "",
      };
    } else {
      schemaObj = {
        name: yup.string().required("Please Enter Name"),
        email: yup
          .string()
          .email("Please Enter Valid Email")
          .required("Plaese Enter Email"),
        password: yup.string().required("Please Enter Password"),
      };
      initVal = {
        name: "",
        email: "",
        password: "",
      };
    }
  }

  let schema = yup.object().shape(schemaObj);

  const handleLogin = () => {
    localStorage.setItem("user", 123);
  };

  const insertData = (val) => {
    let localData = JSON.parse(localStorage.getItem("user"));

    if (localData) {
      localData.push(val);
      localStorage.setItem("user", JSON.stringify(localData));
    } else {
      localStorage.setItem("user", JSON.stringify([val]));
    }
  };

  const formik = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: (values) => {
      if (userType === "Login") {
        handleLogin();
        history.push("/");
      } else {
        insertData(values);
      }
    },
    enableReinitialize: true,
  });

  const {
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    values,
  } = formik;
  return (
    <>
      <section id="login" className="login">
        <Container>
          <div className="section-title">
            {!reset ? (
              userType === "Login" ? (
                <h2>Login</h2>
              ) : (
                <h2>Signup</h2>
              )
            ) : (
              <h2>Reset Password</h2>
            )}
          </div>
          <Formik values={formik}>
            <Form
              onSubmit={handleSubmit}
              onReset={resetForm}
              className="php-email-form"
            >
              <Row className="d-flex justify-content-center">
                {userType === "Login" ? null : (
                  <Col md={8}>
                    <FormGroup className="mt-3 mt-md-0">
                      <Field
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        value={values.name || ""}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <div className="validate">{errors.name}</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                )}
                <Col md={8}>
                  <FormGroup className="mt-3 mt-md-0">
                    <Field
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      value={values.email || ""}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div className="validate">{errors.email}</div>
                    ) : null}
                  </FormGroup>
                </Col>
                {!reset ? (
                  <Col md={8}>
                    <FormGroup className="mt-3 mt-md-0">
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Your Password"
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.password || ""}
                        onBlur={handleBlur}
                      />

                      {errors.password && touched.password ? (
                        <div className="validate">{errors.password}</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                ) : null}
              </Row>
              <div className="text-center mb-3">
                {!reset ? (
                  userType === "Login" ? (
                    <Button type="submit" className="shadow-none">
                      Login
                    </Button>
                  ) : (
                    <Button type="submit" className="shadow-none">
                      Signup
                    </Button>
                  )
                ) : (
                  <Button type="submit" className="shadow-none">
                    Submit
                  </Button>
                )}
                <Button type="reset" className="shadow-none">
                  Reset
                </Button>
              </div>
              <div className="text-center mb-3">
                {userType === "Login" ? (
                  <div>
                    <p className="d-inline mt-2">Create a new account: </p>
                    <a
                      onClick={() => {
                        setUserType("Signup");
                        setReset(false);
                      }}
                      className="text-primary text-decoration-underline"
                    >
                      Signup
                    </a>
                  </div>
                ) : (
                  <div>
                    <p className="d-inline mt-2">Already have an account? </p>
                    <a
                      onClick={() => {
                        setUserType("Login");
                        setReset(false);
                      }}
                      className="text-primary text-decoration-underline"
                    >
                      Login
                    </a>
                  </div>
                )}
              </div>
              {userType === "Login" ? (
                <div className="text-center mb-3">
                  {!reset ? (
                    <a
                      onClick={() => {
                        setReset(true);
                      }}
                      className="text-primary text-decoration-underline"
                    >
                      Forgot Password?
                    </a>
                  ) : null}
                </div>
              ) : null}
            </Form>
          </Formik>
        </Container>
      </section>
    </>
  );
};

export default Login;

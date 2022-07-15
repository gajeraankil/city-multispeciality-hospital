import React from "react";
import * as yup from "yup";
import { Formik, Form, useFormik } from "formik";

const Contact = () => {
  let schema = yup.object().shape({
    name: yup.string().required("Plaese Enter Name"),
    email: yup
      .string()
      .email("Please Enter Valid Email")
      .required("Plaese Enter Email"),
    subject: yup.string().required("Plaese Enter Subject"),
    message: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, touched, handleSubmit, handleBlur, handleChange, values } =
    formik;

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
        </div>
        <div>
          <iframe
            title="Ankil Gajera"
            style={{ border: 0, width: "100%", height: 350 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.327743228933!2d72.84902951543738!3d21.218848385895747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa39cf6602f%3A0x7204b4ece89817f0!2sAnkil%20Gajera!5e0!3m2!1sen!2sin!4v1654837337167!5m2!1sen!2sin"
            frameBorder={0}
            allowFullScreen=""
          />
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <Formik values={formik}>
                <Form className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <div className="validate">{errors.name}</div>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <div className="validate">{errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={values.subject}
                      onBlur={handleBlur}
                    />
                    {errors.subject && touched.subject ? (
                      <div className="validate">{errors.subject}</div>
                    ) : null}
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      onChange={handleChange}
                      value={values.message}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

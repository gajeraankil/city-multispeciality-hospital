import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const ListAppointment = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const loadData = () => {
    let localData = JSON.parse(localStorage.getItem("appointment"));
    if (localData !== null) {
      setData(localData);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("appointment"));

    let fData;
    fData = localData.filter((v) => v.id !== id);
    localStorage.setItem("appointment", JSON.stringify(fData));

    loadData();
  };

  const handleEdit = (id) => {
    history.push("/book-appointment", { id: id });
  };

  return (
    <>
      <section id="appointment" className="appointment section-bg">
        <div className="container">
          <div className="section-title">
            <h2>List an Appointment</h2>
            <div className="row">
              <div className="col-6 text-end">
                <NavLink to="/book-appointment">Book an Appointment</NavLink>
              </div>
              <div className="col-6 text-start">
                <NavLink to="/list-appointment">List an Appointment</NavLink>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((d, i) => {
              return (
                <div key={i} className="mb-3 col-12 col-sm-6 col-md-4 col-lg-3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">{d.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {d.email}
                      </CardSubtitle>
                      <CardText>{d.phone}</CardText>
                      <CardText>{d.date}</CardText>
                      <CardText>{d.department}</CardText>
                      <CardText>{d.doctor}</CardText>
                      <Button
                        className="me-2"
                        onClick={() => {
                          handleEdit(d.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          handleDelete(d.id);
                        }}
                      >
                        Delete
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListAppointment;

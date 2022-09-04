import React from "react";
import List from "../Component/List";

const Doctors = () => {
  const doctorsData = [
    {
      name: "Walter White",
      designation: "Chief Medical Officer",
      img: "assets/img/doctors/doctors-1.jpg",
      desc: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Jhonson",
      designation: "Anesthesiologist",
      img: "assets/img/doctors/doctors-2.jpg",
      desc: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "William Anderson",
      designation: "Cardiology",
      img: "assets/img/doctors/doctors-3.jpg",
      desc: "Dolorum tempora officiis odit laborum officiis et et accusamus",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Amanda Jepson",
      designation: "Neurosurgeon",
      img: "assets/img/doctors/doctors-4.jpg",
      desc: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];
  return (
    <>
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <List data={doctorsData} />
        </div>
      </section>
    </>
  );
};

export default Doctors;

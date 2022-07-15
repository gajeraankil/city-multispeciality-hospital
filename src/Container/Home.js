import React from "react";
import { useHistory } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Hospital</h1>
          <h2>We are team of talented doctors making websites with React</h2>
          <button
            onClick={() => history.push("/about")}
            className="btn-get-started scrollto border-0"
          >
            Get Started
          </button>
        </div>
      </section>
      <main id="main">
        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="fas fa-user-md" />
                  <span>23</span>
                  <p>Doctors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="far fa-hospital" />
                  <span>18</span>
                  <p>Departments</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="fas fa-heartbeat" />
                  <span>980</span>
                  <p>Patients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="fas fa-award" />
                  <span>12</span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-heartbeat" />
                  </div>
                  <h4>Lorem Ipsum</h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-pills" />
                  </div>
                  <h4>Sed ut perspiciatis</h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-hospital-user" />
                  </div>
                  <h4>Magni Dolores</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-dna" />
                  </div>
                  <h4>Nemo Enim</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-wheelchair" />
                  </div>
                  <h4>Dele cardo</h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-notes-medical" />
                  </div>
                  <h4>Divera don</h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Reviews</h2>
            </div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              pagination={{ clickable: true }}
              slidesPerView={2}
              autoplay={true}
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jacob Wilsson</h3>
                      <h4>Writer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis posuere, lacus ac tincidunt tempor, sapien justo
                        ultrices ante, vel pharetra turpis ex ac nisi. Aliquam
                        tempor egestas turpis, nec commodo lorem egestas
                        eleifend. Curabitur lacus ipsum, fermentum sit amet leo
                        non, blandit tincidunt turpis.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Ava Smith</h3>
                      <h4>Artist</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Praesent pellentesque leo vestibulum, facilisis ante
                        eget, pharetra mi. Curabitur risus mauris, dignissim
                        ullamcorper vehicula id, aliquet ut turpis. Nunc euismod
                        nec nulla non tincidunt. Vivamus nisi mauris, blandit
                        quis sem sit amet, posuere blandit diam. Cras quis quam
                        suscipit.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Abigail Martin</h3>
                      <h4>Teacher</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Fusce ante ipsum, convallis auctor dui sit amet, feugiat
                        blandit ex. Etiam eget tortor sed augue laoreet laoreet
                        vel non libero. Sed in nibh ut sem ornare feugiat at at
                        risus. Morbi gravida enim vitae tortor fringilla
                        tristique. Nulla ac mauris et elit eleifend suscipit et
                        quis lacus. Nam nec ex purus.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Alexander Tremblay</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Nam at est in nibh cursus hendrerit. Nunc commodo diam a
                        erat fermentum aliquet. Integer at interdum nisi.
                        Vivamus risus erat, facilisis a blandit ut, sollicitudin
                        sed est. Vestibulum volutpat luctus quam sed finibus.
                        Sed luctus odio eget ex posuere hendrerit. Donec iaculis
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jayden Brown</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Quisque tristique lectus eget pretium lacinia. Mauris
                        suscipit sapien sit amet enim rhoncus tristique.
                        Phasellus dictum aliquam nisl vel fermentum. Duis
                        viverra luctus justo, vel aliquam ipsum mollis nec.
                        Pellentesque quis suscipit erat. Mauris id lobortis
                        tellus.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section id="gallery" className="gallery">
          <div className="container">
            <div className="section-title">
              <h2>Gallery</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-1.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-2.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-3.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-4.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-5.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-6.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-7.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-8.jpg"
                    className="galelry-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

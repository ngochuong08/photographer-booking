import Link from 'next/link'
import DatepickerInit from '../src/components/DatepickerInit'

export default function HomePage(){
  return (
    <>
      <DatepickerInit />
      <section className="banner-section banner-sec-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content">
                <div className="rating-appointment d-inline-flex align-items-center gap-2">
                  <div className="avatar-list-stacked avatar-group-lg">
                    <span className="avatar avatar-rounded"><img className="border border-white" src="/theme/assets/img/doctors/doctor-thumb-22.jpg" alt="img"/></span>
                    <span className="avatar avatar-rounded"><img className="border border-white" src="/theme/assets/img/doctors/doctor-thumb-23.jpg" alt="img"/></span>
                    <span className="avatar avatar-rounded"><img src="/theme/assets/img/doctors/doctor-thumb-24.jpg" alt="img"/></span>
                  </div>
                  <div className="me-2">
                    <h6 className="mb-1">5K+ Appointments</h6>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-star text-orange me-1"></i>
                        <i className="fa-solid fa-star text-orange me-1"></i>
                        <i className="fa-solid fa-star text-orange me-1"></i>
                        <i className="fa-solid fa-star text-orange me-1"></i>
                        <i className="fa-solid fa-star text-orange me-1"></i>
                      </div>
                      <p>5.0 Ratings</p>
                    </div>
                  </div>
                </div>
                <h1 className="display-5">Discover Photography: Capture Your Trusted <span className="banner-icon"><img src="/theme/assets/img/icons/video.svg" alt="img"/></span> <span className="text-gradient"> Moments</span> Today</h1>
                <div className="search-box-one">
                  <form action="/search" method="get">
                    <div className="search-input search-line">
                      <i className="isax isax-hospital5 bficon"></i>
                      <div className=" mb-0">
                        <input name="q" type="text" className="form-control" placeholder="Search photographers, services, locations" />
                      </div>
                    </div>
                    <div className="search-input search-map-line">
                      <i className="isax isax-location5"></i>
                      <div className=" mb-0">
                        <input name="location" type="text" className="form-control" placeholder="Location" />
                      </div>
                    </div>
                    <div className="search-input search-calendar-line">
                      <i className="isax isax-calendar-tick5"></i>
                      <div className=" mb-0">
                        <input name="date" type="text" className="form-control datetimepicker" placeholder="Date" />
                      </div>
                    </div>
                    <div className="form-search-btn">
                      <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-img">
                <img src="/theme/assets/img/banner/doctor-banner.png" className="img-fluid" alt="banner" />
                <div className="banner-appointment">
                  <h6>1K</h6>
                  <p>Appointments <span className="d-block">Completed</span></p>
                </div>
                <div className="banner-patient">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded"><img src="/theme/assets/img/patients/patient19.jpg" alt="img"/></span>
                    <span className="avatar avatar-rounded"><img  src="/theme/assets/img/patients/patient16.jpg" alt="img"/></span>
                    <span className="avatar avatar-rounded"><img src="/theme/assets/img/patients/patient18.jpg" alt="img"/></span>
                  </div>
                  <p>15K+</p>
                  <p>Satisfied Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="list-section">
        <div className="container">
          <div className="list-card card mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center justify-content-xl-between flex-wrap gap-4 list-wraps">
                <a href="/booking" className="list-item">
                  <div className="list-icon bg-secondary">
                    <img src="/theme/assets/img/icons/list-icon-01.svg" alt="img" />
                  </div>
                  <h6>Book Appointment</h6>
                </a>
                <a href="/" className="list-item">
                  <div className="list-icon bg-pink">
                    <img src="/theme/assets/img/icons/list-icon-03.svg" alt="img" />
                  </div>
                  <h6>Services</h6>
                </a>

                <a href="/photographer" className="list-item">
                  <div className="list-icon bg-primary">
                    <img src="/theme/assets/img/icons/list-icon-02.svg" alt="img" />
                  </div>
                  <h6>View Photographers</h6>
                </a>
                <a href="/" className="list-item">
                  <div className="list-icon bg-pink">
                    <img src="/theme/assets/img/icons/list-icon-06.svg" alt="img" />
                  </div>
                  <h6>Blog</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

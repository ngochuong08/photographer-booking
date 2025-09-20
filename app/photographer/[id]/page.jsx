import Link from 'next/link'

export default function PhotographerPage({ params }){
  const { id } = params
  const name = `Photographer ${id}`
  return (
    <div className="content">
      <div className="container">
        <div className="row" style={{marginTop: '50px'}}>
          <div className="col-md-12">
            <div className="profile-header">
              <div className="row align-items-center">
                <div className="col-auto profile-image">
                  <a href="#">
                    <img src="/theme/assets/img/doctor-grid/doctor-grid-02.jpg" className="rounded-circle" alt="Profile"  style={{width: 200}}/>
                  </a>
                </div>
                <div className="col ml-md-n2 profile-user-info">
                  <h4 className="user-name mb-0">{name}</h4>
                  <p className="text-muted mb-1">Wedding & Portrait Photographer</p>
                  <div className="rating">
                    <i className="fa fa-star text-warning" /> <i className="fa fa-star text-warning" /> <i className="fa fa-star text-warning" /> <i className="fa fa-star text-warning" /> <i className="fa fa-star-half-alt text-warning" />
                    <span className="d-inline-block average-rating"> 4.8</span>
                  </div>
                  <div className="user-Location"><i className="fa-solid fa-location-dot" /> New York, USA</div>
                </div>
                <div className="col-auto profile-btn">
                  <Link href={`/booking/${id}`} className="btn btn-primary">Book Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About</h5>
                <p>Experienced photographer specializing in weddings, portraits and editorial shoots. I focus on natural light and candid moments to create timeless images for couples and families.</p>

                <h5 className="card-title mt-4">Education</h5>
                <div className="experience-box">
                  <ul className="experience-list">
                    <li>
                      <div className="experience-info">
                        <div className="experience-marker" />
                        <div className="experience-sub">B.F.A. in Photography</div>
                        <p className="text-muted mb-0">School of Visual Arts, 2014</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h5 className="card-title mt-4">Services</h5>
                <div className="service-list">
                  <div className="service-item">Wedding Photography</div>
                  <div className="service-item">Engagement Sessions</div>
                  <div className="service-item">Portrait Sessions</div>
                </div>

                <h5 className="card-title mt-4">Portfolio</h5>
                <div className="row">
                  <div className="col-md-4 mb-3"><img src="/theme/assets/img/blog/blog-37.jpg" className="img-fluid rounded" alt="" /></div>
                  <div className="col-md-4 mb-3"><img src="/theme/assets/img/blog/blog-32.jpg" className="img-fluid rounded" alt="" /></div>
                  <div className="col-md-4 mb-3"><img src="/theme/assets/img/blog/blog-33.jpg" className="img-fluid rounded" alt="" /></div>
                </div>

                <h5 className="card-title mt-4">Reviews</h5>
                <div className="review">
                  <div className="review-item">
                    <h6 className="mb-1">Anna</h6>
                    <p className="text-muted mb-1">Great experience — captured beautiful moments from our wedding day.</p>
                    <div className="rating"><i className="fa fa-star text-warning" /> <i className="fa fa-star text-warning" /> <i className="fa fa-star text-warning" /> <i className="fa fa-star text-warning" /> <i className="fa fa-star text-warning" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Contact & Availability</h5>
                <ul className="list-unstyled mb-0">
                  <li><i className="feather-phone me-2" /> <a href="tel:+1234567890">+1 234 567 890</a></li>
                  <li className="mt-2"><i className="feather-mail me-2" /> <a href="mailto:photo@example.com">photo@example.com</a></li>
                  <li className="mt-2"><i className="feather-map-pin me-2" /> New York, USA</li>
                </ul>

                <div className="mt-4">
                  <Link href={`/booking/${id}`} className="btn btn-primary w-100">Book Now</Link>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Business Hours</h5>
                <ul className="list-unstyled mb-0">
                  <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
                  <li>Sat: 10:00 AM - 4:00 PM</li>
                  <li>Sun: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

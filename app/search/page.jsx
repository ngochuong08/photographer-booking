import PhotographerCard from '../../src/shared/PhotographerCard'

export default function SearchPage({ searchParams }){
  const q = searchParams?.q || ''
  const location = searchParams?.location || ''
  const date = searchParams?.date || ''

  const mock = [
    { id: 1, name: 'Alice Nguyen', location: 'Hanoi', price: 150, rating: 4.9 },
    { id: 2, name: 'Bao Tran', location: 'Ho Chi Minh City', price: 200, rating: 4.8 },
    { id: 3, name: 'Linh Ho', location: 'Da Nang', price: 120, rating: 4.7 },
  ]

  const results = mock.filter(p => {
    const matchesQ = q ? (p.name.toLowerCase().includes(q.toLowerCase()) || p.location.toLowerCase().includes(q.toLowerCase())) : true
    const matchesLocation = location ? p.location.toLowerCase().includes(location.toLowerCase()) : true
    return matchesQ && matchesLocation
  })

  return (
    <>
		<div className="breadcrumb-bar overflow-visible">
			<div className="container">
				<div className="row align-items-center inner-banner">
					<div className="col-md-12 col-12 text-center">
						<nav aria-label="breadcrumb" className="page-breadcrumb">
							
							<h2 className="breadcrumb-title">Search Photographers</h2>
						</nav>
					</div>
				</div>
				<div className="bg-primary-gradient rounded-pill doctors-search-box">
					<div className="search-box-one rounded-pill">
						<form action="https://Photography.dreamstechnologies.com/html/template/search-2.html"> 
							<div className="search-input search-line">
								<i className="isax isax-hospital5 bficon"></i>
								<div className=" mb-0">
									<input type="text" className="form-control" placeholder="Search for Doctors, Hospitals, Clinics"/>
								</div>
							</div>
							<div className="search-input search-map-line">
								<i className="isax isax-location5"></i>
								<div className=" mb-0">
									<input type="text" className="form-control" placeholder="Location"/> 
								</div>
							</div>
							<div className="search-input search-calendar-line">
								<i className="isax isax-calendar-tick5"></i>
								<div className=" mb-0">
									<input type="text" className="form-control datetimepicker" placeholder="Date"/>
								</div>
							</div>
							<div className="form-search-btn">
								<button className="btn btn-primary d-inline-flex align-items-center rounded-pill" type="submit"><i className="isax isax-search-normal-15 me-2"></i>Search</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="breadcrumb-bg">
				<img src="theme/assets/img/bg/breadcrumb-bg-01.png" alt="img" className="breadcrumb-bg-01"/>
				<img src="theme/assets/img/bg/breadcrumb-bg-02.png" alt="img" className="breadcrumb-bg-02"/>
				<img src="theme/assets/img/bg/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-03"/>
				<img src="theme/assets/img/bg/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-04"/>
			</div>
		</div>
		<div className="content mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="mb-4">
							<h3>Showing <span className="text-secondary">450</span> Doctors For You</h3>
						</div>
					</div>
					<div className="col-md-6">
						<div className="d-flex align-items-center justify-content-end mb-4">
							<div className="doctor-filter-availability me-3">
								<p>Availability</p>
								<div className="status-toggle status-tog">
									<input type="checkbox" id="status_6" className="check"/>
									<label className="checktoggle">checkbox</label>
								</div>
							</div>
							<a href="javascript:void(0);" className="btn btn-sm head-icon me-3" id="filter_search"><i className="isax isax-sort"></i></a>
							<div className="dropdown header-dropdown">
								<a className="dropdown-toggle sort-dropdown" data-bs-toggle="dropdown" href="javascript:void(0);" aria-expanded="false">
									<span>Sort By</span>Price (Low to High)
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<a href="javascript:void(0);" className="dropdown-item">
										Price (Low to High)
									</a>
									<a href="javascript:void(0);" className="dropdown-item">
										Price (High to Low)
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="filter_inputs">
					<div className="row align-items-center gy-3">
						<div className="col-lg-9 mb-4">
							<div className="row gx-3">
								<div className="col-md col-sm-4 col-6">
									<div>
										<select className="select form-control">
											<option>Specialities</option>
											<option>Urology</option>
											<option>Psychiatry</option>
											<option>Psychiatry</option>
											<option>Cardiology</option>
										</select>
									</div>
								</div>
								<div className="col-md col-sm-4 col-6">
									<div>
										<select className="select form-control">
											<option>Hospitals</option>
											<option>Cleveland Clinic</option>
											<option>Apollo Hospital</option>
											<option>Apollo Hospital</option>
										</select>
									</div>
								</div>
								<div className="col-md col-sm-4 col-6">
									<div>
										<select className="select form-control">
											<option>Doctors</option>
											<option>Dr. Michael Brown</option>
											<option>Dr. Nicholas Tello</option>
											<option>Dr. Harold Bryant</option>
										</select>
									</div>
								</div>
								<div className="col-md col-sm-4 col-6">
									<div>
										<select className="select form-control">
											<option>Reviews</option>
											<option>5 Star</option>
											<option>4 Star</option>
											<option>3 Star</option>
										</select>
									</div>
								</div>
								<div className="col-md col-sm-4 col-6">
									<div>
										<select className="select form-control">
											<option>Clinic</option>
											<option>Bright Smiles Dental Clinic</option>
											<option>Family Care Clinic</option>
											<option>Express Health Clinic</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 mb-4">
							<div className="text-end">
								<a href="#" className="fw-medium text-secondary text-decoration-underline">Clear All</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-01.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>5.0</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar align-items-center justify-content-between p-3">
									<a href="#" className="text-indigo fw-medium fs-14">Psychologist</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Michael Brown</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Minneapolis, MN</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$650</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-02.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.6</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-pink align-items-center justify-content-between p-3">
									<a href="#" className="text-pink fw-medium fs-14">Pediatrician</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Nicholas Tello</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Ogden, IA</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">60 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$400</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-03.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.8</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-teal align-items-center justify-content-between p-3">
									<a href="#" className="text-teal fw-medium fs-14">Neurologist</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Harold Bryant</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Winona, MS</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$500</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-04.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.8</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-info align-items-center justify-content-between p-3">
									<a href="#" className="text-info fw-medium fs-14">Cardiologist</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Sandra Jones</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Beckley, WV</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$550</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-05.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.2</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-teal align-items-center justify-content-between p-3">
									<a href="#" className="text-teal fw-medium fs-14">Neurologist</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Charles Scott</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Hamshire, TX</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$600</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-06.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.2</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-info align-items-center justify-content-between p-3">
									<a href="#" className="text-info fw-medium fs-14">Cardiologist</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Robert Thomas</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Oakland, CA</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$450</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-07.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.7</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-indigo align-items-center justify-content-between p-3">
									<a href="#" className="text-indigo fw-medium fs-14">Psychologist</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Margaret Koller</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Killeen, TX</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$450</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-08.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.7</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-pink align-items-center justify-content-between p-3">
									<a href="#" className="text-pink fw-medium fs-14">Pediatrician</a>
									<span className="badge bg-danger-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Unavailable
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Cath Busick</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Schenectady, NY</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$750</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-09.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.9</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-indigo align-items-center justify-content-between p-3">
									<a href="#" className="text-indigo fw-medium fs-14">Psychologist</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Travis Barton</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Metairie, LA</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">60 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$480</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-10.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>5.0</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-danger align-items-center justify-content-between p-3">
									<a href="#" className="text-danger fw-medium fs-14">Gastroenterology</a>
									<span className="badge bg-success-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Available
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Daisy Malcolm</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Lexington, KY</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">60 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$520</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-11.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.4</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-info align-items-center justify-content-between p-3">
									<a href="#" className="text-info fw-medium fs-14">Cardiologist</a>
									<span className="badge bg-danger-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Unavailable
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Tyrone Patrick</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Clark Fork, ID</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$360</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-3 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-img card-img-hover">
								<a href="./photographer/1"><img src="theme/assets/img/doctor-grid/doctor-grid-12.jpg" alt=""/></a>
								<div className="grid-overlay-item d-flex align-items-center justify-content-between">
									<span className="badge bg-orange"><i className="fa-solid fa-star me-1"></i>4.2</span>
									<a href="javascript:void(0)" className="fav-icon">
										<i className="fa fa-heart"></i>
									</a>
								</div>
							</div>
							<div className="card-body p-0">
								<div className="d-flex active-bar active-bar-pink align-items-center justify-content-between p-3">
									<a href="#" className="text-pink fw-medium fs-14">Pediatrician</a>
									<span className="badge bg-danger-light d-inline-flex align-items-center">
										<i className="fa-solid fa-circle fs-5 me-1"></i>
										Unavailable
									</span>
								</div>
								<div className="p-3 pt-0">
									<div className="doctor-info-detail mb-3 pb-3">
										<h3 className="mb-1"><a href="./photographer/1">Dr. Ann Bell</a></h3>
										<div className="d-flex align-items-center">
											<p className="d-flex align-items-center mb-0 fs-14"><i className="isax isax-location me-2"></i>Minneapolis, MN</p>
											<i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1"></i>
											<span className="fs-14 fw-medium">30 Min</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<p className="mb-1">Consultation Fees</p>
											<h3 className="text-orange">$630</h3>
										</div>
										<a href="./booking/1" className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill">
											<i className="isax isax-calendar-1 me-2"></i>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="text-center mb-4">
							<a href="login.html" className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill">
								<i className="isax isax-d-cube-scan5 me-2"></i>
								Load More 425 Doctors
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

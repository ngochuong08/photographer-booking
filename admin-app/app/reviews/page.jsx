import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function ReviewsPage(){
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Reviews</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>Photographer Name</th>
                          <th>Ratings</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* sample rows converted from template */}
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src="/theme/admin/assets/img/patients/patient1.jpg" alt="User" />
                              </a>
                              <a href="/profile">Charlene Reed</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src="/theme/admin/assets/img/doctors/doctor-thumb-01.jpg" alt="User" />
                              </a>
                              <a href="/profile">Dr. Ruby Perrin</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </td>
                          <td>3 Nov 2023 <br /><small>09.59 AM</small></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>

                        {/* other rows (abbreviated) */}
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src="/theme/admin/assets/img/patients/patient2.jpg" alt="User" />
                              </a>
                              <a href="/profile">Travis Trimble</a>
                            </h2>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src="/theme/admin/assets/img/doctors/doctor-thumb-02.jpg" alt="User" />
                              </a>
                              <a href="/profile">Dr. Darren Elder</a>
                            </h2>
                          </td>
                          <td>
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star text-warning" />
                            <i className="fe fe-star-o text-secondary" />
                          </td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                          <td>2 Nov 2023 <br /><small>08.50 AM</small></td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>

                        {/* more rows can follow the same pattern */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Modal (kept simple) */}
          <div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-content p-2">
                    <h4 className="modal-title">Delete</h4>
                    <p className="mb-4">Are you sure want to delete?</p>
                    <button type="button" className="btn btn-primary">Save</button>
                    <span className="ml-10"> </span>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

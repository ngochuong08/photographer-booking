import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function AlbumsPage(){
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title">Galleries</h3>
              </div>
              <div className="col-sm-5 col">
                <a href="#Add_Album" data-bs-toggle="modal" className="btn btn-primary btn-rounded float-end mt-2">
                      <i class="fa fa-plus"></i> Add new photos collection</a>
            
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
                          <th>#</th>
                          <th>Album</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#ALB001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img" src="/theme/admin/assets/img/specialities/specialities-01.png" alt="Album" />
                              </a>
                              <a href="/profile">Wedding Collection</a>
                            </h2>
                          </td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light" data-bs-toggle="modal" href="#edit_album_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-bs-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>#ALB002</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img" src="/theme/admin/assets/img/specialities/specialities-02.png" alt="Album" />
                              </a>
                              <a href="/profile">Portfolio</a>
                            </h2>
                          </td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-success-light" data-bs-toggle="modal" href="#edit_album_details">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a data-bs-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>

                        {/* more rows can be added similarly */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Album Modal */}
          <div className="modal fade" id="Add_Album" aria-hidden="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Album</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="mb-3">
                          <label className="mb-2">Album Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="mb-3">
                          <label className="mb-2">Image</label>
                          <input type="file" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Album Modal */}
          <div className="modal fade" id="edit_album_details" aria-hidden="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Album</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="mb-3">
                          <label className="mb-2">Album Name</label>
                          <input type="text" className="form-control" defaultValue="Portfolio" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="mb-3">
                          <label className="mb-2">Image</label>
                          <input type="file" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Modal (reused) */}
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

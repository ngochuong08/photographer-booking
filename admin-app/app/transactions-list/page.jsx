import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function TransactionsListPage(){
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">

          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Transactions</h3>
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
                          <th>Invoice Number</th>
                          <th>Patient ID</th>
                          <th>Patient Name</th>
                          <th>Total Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="invoice.html">#IN0001</a></td>
                          <td>#PT001</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src="/theme/admin/assets/img/patients/patient1.jpg" alt="User Image" />
                              </a>
                              <a href="profile.html">Charlene Reed </a>
                            </h2>
                          </td>
                          <td>$100.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0002</a></td>
                          <td>#PT002</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src="/theme/admin/assets/img/patients/patient2.jpg" alt="User Image" />
                              </a>
                              <a href="profile.html">Travis Trimble </a>
                            </h2>
                          </td>
                          <td>$200.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="invoice.html">#IN0003</a></td>
                          <td>#PT003</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src="/theme/admin/assets/img/patients/patient3.jpg" alt="User Image" />
                              </a>
                              <a href="profile.html">Carl Kelly</a>
                            </h2>
                          </td>
                          <td>$250.00</td>
                          <td>
                            <span className="badge rounded-pill bg-success inv-badge">Paid</span>
                          </td>
                          <td>
                            <div className="actions">
                              <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
                                <i className="fe fe-trash"></i> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        {/* more rows can be added */}
                      </tbody>
                    </table>
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

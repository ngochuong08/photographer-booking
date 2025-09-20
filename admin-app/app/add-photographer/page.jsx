import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function AddPhotographerPage() {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Add a Photographer</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Inputs</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Text Input
                      </label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Password
                      </label>
                      <div className="col-md-10">
                        <input type="password" className="form-control" />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Disabled Input
                      </label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" disabled />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Readonly Input
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="readonly"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Placeholder
                      </label>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Placeholder"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        File Input
                      </label>
                      <div className="col-md-10">
                        <input className="form-control" type="file" />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Default Select
                      </label>
                      <div className="col-md-10">
                        <select className="form-select form-control">
                          <option>-- Select --</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">Radio</label>
                      <div className="col-md-10">
                        <div className="radio">
                          <label>
                            <input type="radio" name="radio" /> Option 1
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="radio" /> Option 2
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="radio" /> Option 3
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Checkbox
                      </label>
                      <div className="col-md-10">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox" /> Option 1
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox" /> Option 2
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox" /> Option 3
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-form-label col-md-2">
                        Textarea
                      </label>
                      <div className="col-md-10">
                        <textarea
                          rows={5}
                          cols={5}
                          className="form-control"
                          placeholder="Enter text here"
                        />
                      </div>
                    </div>

                    <div className="mb-0 row">
                      <label className="col-form-label col-md-2">
                        Input Addons
                      </label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input className="form-control" type="text" />
                          <button className="btn btn-primary" type="button">
                            Button
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-0 row">
                        <div className="col-lg-12" style={{ textAlign: 'right', marginTop: '20px' }}>
                      <button className="btn btn-primary" type="submit">
                        Submit form
                      </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

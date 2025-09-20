export default function Header(){
  return (
    <div className="header">
      <div className="header-left">
        <a href="index.html" className="logo">
          <img src="/theme/admin/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="index.html" className="logo logo-small">
          <img src="/theme/admin/assets/img/logo-small.png" alt="Logo" width="30" height="30" />
        </a>
      </div>

      {/* <a href="javascript:void(0);" id="toggle_btn">
        <i className="fe fe-text-align-left"></i>
      </a> */}
      <a className="mobile_btn" id="mobile_btn">
        <i className="fa fa-bars"></i>
      </a>
      <ul className="nav user-menu">
        <li className="nav-item">
          <a href="#" className="dropdown-toggle">
            <i className="fe fe-user"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function Sidebar(){
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title"><span>Main</span></li>
            <li className="active"><a href="./"><i className="fe fe-home"></i> <span>Dashboard</span></a></li>
            <li><a href="./appointments"><i className="fe fe-layout"></i> <span>Appointments</span></a></li>
            <li><a href="./photographers"><i className="fe fe-user-plus"></i> <span>Photographers</span></a></li>
            <li><a href="./transactions"><i className="fe fe-activity"></i> <span>Transactions</span></a></li>
            <li><a href="./profile"><i className="fe fe-user-plus"></i> <span>Profile</span></a></li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

import "./sidebar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Lama Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="buttom">color option</div>
    </div>
  );
}

export default SideBar;

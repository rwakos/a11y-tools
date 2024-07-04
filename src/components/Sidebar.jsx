import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">a11y</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to={`/`}>
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Home</span>
            </Link>
          </li>
          <li>
            <Link to="low-contrast">
              <i className="bx bx-collection"></i>
              <span className="link_name">Low contrast</span>
            </Link>
          </li>
          <li>
            <Link to="alt-image">
              <i className="bx bx-collection"></i>
              <span className="link_name">Alt Image</span>
            </Link>
          </li>
          <li>
            <Link to="input-label">
              <i className="bx bx-collection"></i>
              <span className="link_name">Input label</span>
            </Link>
          </li>

          <li>
            <div className="profile-details">
              <div className="profile-content"></div>
              <div className="name-job">
                <div className="profile_name">Richard Reveron</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

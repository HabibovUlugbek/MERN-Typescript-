import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <div className='container-fluid d-flex justify-content-between'>
            <Link className='navbar-brand' to='/'>
              My Favorite Video
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse d-flex justify-content-end'
              id='navbarNav'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/new-video'>
                    Create new video
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

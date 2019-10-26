import React from 'react';


const menuTitle = ["Home", "About Me", "Contact", "Blog",];

function NavBar(props) {
  const mappedList = menuTitle.map((item, idx) => {
    console.log(idx)
    return (
      <li key={idx} className="nav-item ">
        <a className="nav-link btn btn-link text-white" href={item}>{item}</a>
      </li>
    )
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand text-white" href="https://www.linkedin.com/in/samuel-wheeling-01121513a/">Sam Wheeling</a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

          {mappedList}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-link my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;

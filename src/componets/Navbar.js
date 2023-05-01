import React,{useEffect} from "react";
import { useContext } from "react";
import Context from "../contextapi/context";
function Navbar() {
  let astate=useContext(Context);
  let {cloud_pct,setcloud_pct,feels_like,setfeels_like,humidity,sethumidity,max_temp,setmax_temp,min_temp,setmin_temp,submit,setsubmit,sunrise,setsunrise,sunset,setsunset,temp,settemp,setwind_degrees,wind_degrees,wind_speed,setwind_speed,city,setcity,getweather}=astate;
    useEffect(()=>{
      getweather(city)
      let s=document.getElementById("city");
      let d=document.getElementById('submit');
      d.addEventListener("click", (e) => {
        e.preventDefault();
        getweather(s.value);
      });
    },[])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Weather App
          </a>
          <button
            className="navbar-toggler"
            htmlType="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Uses
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Common place weather
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      delhi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Rajsthan
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      banglore
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                id="city"
                className="form-control me-2"
                htmlType="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                htmlType="submit"
                id="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

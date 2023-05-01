import React from "react";
import { useContext } from "react";
import Context from "../contextapi/context";
function Home() {
  const astate=useContext(Context);
  const {cloud_pct,setcloud_pct,feels_like,setfeels_like,humidity,sethumidity,max_temp,setmax_temp,min_temp,setmin_temp,submit,setsubmit,sunrise,setsunrise,sunset,setsunset,temp,settemp,setwind_degrees,wind_degrees,wind_speed,setwind_speed,city,setcity,getweather}=astate;
  return (
    <div className="container">
      <h1 className="my-4 text-center">Weather for {city}</h1>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Humidity Info</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  <small className="text-muted fw-light">{humidity} %</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Cloud PCT is <span>{cloud_pct}</span>{" "}
                  </li>
                  <li>Feels like {feels_like}</li>
                  <li>Humidity is {humidity}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Temperature</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">{temp} &deg;C 
                  <small className="text-muted fw-light"></small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Temperature <span>{temp}</span>{" "}
                  </li>
                  <li>
                    Min Temperature <span>{min_temp}</span>{" "}
                  </li>
                  <li>Max Temperature {max_temp}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Wind Info</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {wind_speed}<small className="text-muted fw-light">Km/s</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Wind speed is <span>{wind_speed}</span>{" "}
                  </li>
                  <li>
                    Wind degree is <span>{wind_degrees}</span>{" "}
                  </li>
                  <li>Sunrise time {sunrise}</li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Weather of other places</h2>

        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{ width: "34%;" }}>city</th>
                <th style={{ width: "34%;" }}>Temperature</th>
                <th style={{ width: "34%;" }}>Max_temp</th>
                <th style={{ width: "34%;" }}>Min_temp</th>
                <th style={{ width: "34%;" }}>Humidity</th>
                <th style={{ width: "34%;" }}>Sunrise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">
                Bhilwara {/*{letweather("Bhilwara")} */}
                </th>
                <td>{temp}&deg;C </td>
                <td>{max_temp}&deg;C</td>
                <td>{min_temp}&deg;C</td>
                <td>{humidity}%</td>
                <td>{sunrise}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                  jaipur 
                </th>
                <td>{temp}&deg;C </td>
                <td>{max_temp}&deg;C</td>
                <td>{min_temp}&deg;C</td>
                <td>{humidity}%</td>
                <td>{sunrise}</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">
                amet{/* {letweather("amet")} */}
                </th>
                <td>{temp}&deg;C </td>
                <td>{max_temp}&deg;C</td>
                <td>{min_temp}&deg;C</td>
                <td>{humidity}%</td>
                <td>{sunrise}</td>
              </tr>
              <tr>
                <th scope="row" className="text-start">
                siyana{/*  {letweather("siyana")} */}
                </th>
                <td>{temp}&deg;C </td>
                <td>{max_temp}&deg;C</td>
                <td>{min_temp}&deg;C</td>
                <td>{humidity}%</td>
                <td>{sunrise}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12 col-lg-6">
          <div className="card card-account shadow-sm d-flex flex-column align-items-start">
            <div className="card-header p-3 border-bottom-0">
              <div className="row align-items-center gx-3">
                <div className="col-auto">
                  <div className="icon-holder">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-person"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-auto">
                  <h4 className="card-title">Profile</h4>
                </div>
              </div>
            </div>
            <div className="card-body px-4 w-100">
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Name</strong>
                    </div>
                    <div className="item-data">Cristian Steve</div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Change
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Email</strong>
                    </div>
                    <div className="item-data">ccristiansteve@gmail.com</div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Change
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Telefono</strong>
                    </div>
                    <div className="item-data">300 868 6708</div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Change
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Dirección</strong>
                    </div>
                    <div className="item-data">KR 98A #67 - 22</div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Change
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Ciudad</strong>
                    </div>
                    <div className="item-data">Bogotá D.C</div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Change
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Celular</strong>
                    </div>
                    <div className="item-data">3008688677</div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Change
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card card-account shadow-sm d-flex flex-column align-items-start">
            <div className="card-header p-3 border-bottom-0">
              <div className="row align-items-center gx-3">
                <div className="col-auto">
                  <div className="icon-holder"></div>
                </div>
                <div className="col-auto">
                  <h4 className="card-title">Security</h4>
                </div>
              </div>
            </div>
            <div className="card-body px-4 w-100">
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Password</strong>
                    </div>
                    <div className="item-data">••••••••</div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Change
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Two-Factor Authentication</strong>
                    </div>
                    <div className="item-data">
                      You haven't set up two-factor authentication.{" "}
                    </div>
                  </div>
                  <div className="col text-end">
                    <Link className="btn-sm btn-secondary" to="#">
                      Set up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

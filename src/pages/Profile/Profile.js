import React from "react";

const Profile = () => {
  return (
    <div class="container">
      <div class="row gy-4">
        <div class="col-12 col-lg-6">
          <div class="card card-account shadow-sm d-flex flex-column align-items-start">
            <div class="card-header p-3 border-bottom-0">
              <div class="row align-items-center gx-3">
                <div class="col-auto">
                  <div class="icon-holder">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-person"
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
                <div class="col-auto">
                  <h4 class="card-title">Profile</h4>
                </div>
              </div>
            </div>
            <div class="card-body px-4 w-100">
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label mb-2">
                      <strong>Photo</strong>
                    </div>
                    <div class="item-data">
                      <img
                        class="profile-image"
                        src="assets/images/user.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Change
                    </a>
                  </div>
                </div>
              </div>
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label">
                      <strong>Name</strong>
                    </div>
                    <div class="item-data">Cristian Steve</div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Change
                    </a>
                  </div>
                </div>
              </div>
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label">
                      <strong>Email</strong>
                    </div>
                    <div class="item-data">ccristiansteve@gmail.com</div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Change
                    </a>
                  </div>
                </div>
              </div>
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label">
                      <strong>Telefono</strong>
                    </div>
                    <div class="item-data">300 868 6708</div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Change
                    </a>
                  </div>
                </div>
              </div>
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label">
                      <strong>Dirección</strong>
                    </div>
                    <div class="item-data">KR 98A #67 - 22</div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Change
                    </a>
                  </div>
                </div>
              </div>
              <div class="item py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label">
                      <strong>Ciudad</strong>
                    </div>
                    <div class="item-data">Bogotá D.C</div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Change
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card card-account shadow-sm d-flex flex-column align-items-start">
            <div class="card-header p-3 border-bottom-0">
              <div class="row align-items-center gx-3">
                <div class="col-auto">
                  <div class="icon-holder"></div>
                </div>
                <div class="col-auto">
                  <h4 class="card-title">Security</h4>
                </div>
              </div>
            </div>
            <div class="card-body px-4 w-100">
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label">
                      <strong>Password</strong>
                    </div>
                    <div class="item-data">••••••••</div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Change
                    </a>
                  </div>
                </div>
              </div>
              <div class="item py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label">
                      <strong>Two-Factor Authentication</strong>
                    </div>
                    <div class="item-data">
                      You haven't set up two-factor authentication.{" "}
                    </div>
                  </div>
                  <div class="col text-end">
                    <a class="btn-sm btn-secondary" href="#">
                      Set up
                    </a>
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

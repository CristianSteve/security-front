import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../Hooks/useUser";
import useAuth from "../../Hooks/useAuth";
import CardProfile from "../../components/CardProfile";

const Profile = () => {

  const { dataUser, loadingUser, errorUser, listUsers, updateUser } = useUser();
  const { user } = useAuth();

  useEffect(() => {
    listUsers(user.id);
  }, [user, listUsers])

  const handleUpdateItem = (name, valor) =>{
    updateUser({id : user.id, [name] : valor })
  }

  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-12 col-lg-6">
          <div className="card card-account shadow-sm d-flex flex-column align-items-start">
            <div className="card-header p-3 border-bottom-0">
              <div className="row align-items-center gx-3">
                <div className="col-auto">
                  <div className="icon-holder">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </div>
                <div className="col-auto">
                  <h4 className="card-title">Profile</h4>
                </div>
              </div>
            </div>
            <div className="card-body px-4 w-100">
              {!loadingUser && dataUser && !errorUser &&
                Object.entries(dataUser).map(([userId, attrUser]) => (
                  (userId !== "password") &&
                    <CardProfile attr={userId.charAt(0).toUpperCase() + userId.slice(1)} vlr={attrUser} name={userId} handleChangeVlr={handleUpdateItem} change={userId==="username"?false:true}/>
                ))
              }
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card card-account shadow-sm d-flex flex-column align-items-start">
            <div className="card-header p-3 border-bottom-0">
              <div className="row align-items-center gx-3">
                <div className="col-auto">
                  <div className="icon-holder">
                    <FontAwesomeIcon icon={faKey} />
                  </div>
                </div>
                <div className="col-auto">
                  <h4 className="card-title">Security</h4>
                </div>
              </div>
            </div>
            <div className="card-body px-4 w-100">
              {!loadingUser && dataUser && !errorUser &&
                <CardProfile attr="Password" vlr={dataUser.password} name="password" handleChangeVlr={handleUpdateItem} type="password" change={true}/>
              }
              <div className="item py-3">
                <div className="row justify-content-between align-items-center"> 
                  <div className="col-auto">
                    <div className="item-label">
                      <strong>Two-Factor Authentication</strong>
                    </div>
                    <div className="item-data">
                      You haven't set up two-factor authentication.
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

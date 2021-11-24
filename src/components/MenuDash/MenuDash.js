import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IoT from "./IoT.svg";
import {
  faBars,
  faSignOutAlt,
  faChartLine,
  faEnvelope,
  faUserAstronaut,
  faArrowDown,
  faBox,
  faBookReader,
  faHistory,
  faLockOpen,
  faCogs,
  faUserCircle,
  faUserNinja,
  faParachuteBox,
} from "@fortawesome/free-solid-svg-icons";

import "./menudash.scss";
import useAuth from "../../Hooks/useAuth";

export const MenuDash = ({ children }) => {
  const refMenu = useRef({});
  const refSidebar = useRef({});
  const {logout, user} =  useAuth();

  useEffect(() => {
    const btn = refMenu.current;
    const active = () => {
      refSidebar.current.classList.toggle("active");
    };
    btn.addEventListener("click", active);
    return () => {
      btn.removeEventListener("click", active);
    };
  }, []);

  const data = [
    {
      title: "DashBoard",
      icon: faChartLine,
      enlace: "/status",
    },
    {
      title: "Administrador",
      icon: faUserNinja,
      enlace: "/administrador",
    },
    {
      title: "Configuraciones",
      icon: faCogs,
      enlace: "/setting",
    },
    {
      title: "Accesos",
      icon: faParachuteBox,
      enlace: "/accesos",
    },
    {
      title: "Seguimiento",
      icon: faBookReader,
      enlace: "/seguimiento",
    },
    {
      title: "Control Acceso",
      icon: faLockOpen,
      enlace: "/control",
    },
    {
      title: "Historico",
      icon: faHistory,
      enlace: "/history",
    },
    {
      title: "Sensores",
      icon: faEnvelope,
      enlace: "#",
      subitem : [
        {
          title: "Nuevo Sensor",
          icon: faBox,
          enlace: "/sensor",
        },        {
          title: "NFC",
          icon: faUserAstronaut,
          enlace: "/nfc",
        }
      ]
    },
  ];
  return (
    <div className="dashboard__content">
      <div ref={refSidebar} className="sidebar active">
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">Windoor IoT</div>
          </div>
          <div ref={refMenu} id="btn">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="imageIoT">
          <img src={IoT} alt="IoT"/>
        </div>
        <ul className="nav_list">
          {data.map((item, i) => (
            <li key={i}>
              <Link to={item.enlace}>
                <FontAwesomeIcon icon={item.icon} />
                <span className="links_name">{item.title}</span>
                {!!item?.subitem && <FontAwesomeIcon icon={faArrowDown} />}
              </Link>
              <span className="tooltip_dash">{item.title}</span>
              {!!item?.subitem && (
                <ul className="sub-item">
                  {item.subitem.map((sub, i) => (
                    <li key={i}>
                      <Link to={sub.enlace}>
                        <FontAwesomeIcon icon={sub.icon} />
                        <span className="links_name">{sub.title}</span>
                      </Link>
                      <span className="tooltip_dash">{sub.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <Link to="/profile">
                <img src="https://i.ibb.co/z4bDXz8/Logo.jpg" alt="profile" />
              </Link>
              <div className="name_job">
                <div className="name">{user.username}</div>
                <div className="job">Online</div>
              </div>
            </div>
            <button onClick={logout}>
              <div id="logOut">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
            </button>
          </div>
          <div className="profile_float">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUserCircle} />
            </Link>
          </div>
        </div>
      </div>
      <div className="content__primary">{children}</div>
    </div>
  );
};

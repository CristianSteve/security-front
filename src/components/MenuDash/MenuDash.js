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
} from "@fortawesome/free-solid-svg-icons";

import "./menudash.scss";

export const MenuDash = ({ children }) => {
  const refMenu = useRef({});
  const refSidebar = useRef({});

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
      enlace: "/mensajes",
      subitem : [
        {
          title: "Nuevo Sensor",
          icon: faBox,
          enlace: "/customers",
        },        {
          title: "NFC",
          icon: faUserAstronaut,
          enlace: "/customers",
        }
      ]
    },
  ];
  return (
    <div className="dashboard__content">
      <div ref={refSidebar} className="sidebar active">
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">Security IoT</div>
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
                <ul>
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
              <img src="" alt="" />
              <div className="name_job">
                <div className="name">@nombreUser</div>
                <div className="job">Online</div>
              </div>
            </div>
            <div id="logOut">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
          </div>
        </div>
      </div>
      <div className="content__primary">{children}</div>
    </div>
  );
};

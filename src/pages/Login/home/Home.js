import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from 'react-router-hash-link';

import "aos/dist/aos.css";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const refBar = useRef(null);

  const handleBar = () => {
    refBar.current.nextSibling.classList.toggle("active");
  };

  return (
    <>
      <header className="dgd_h">
        <nav>
          <div className="dgd_h_bar" ref={refBar} onClick={handleBar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="item">
            <div>
              <HashLink smooth to="/#inicio">
                <img src="https://i.ibb.co/z4bDXz8/Logo.jpg" alt="logo" />
                Windoor <span>Security</span>
              </HashLink>
            </div>
            <ul>
              <li>
                <HashLink smooth to="/#introduccion">Introducción</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#objectivo">Objetivos</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#alcance">Alcance</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#participante">Participantes</HashLink>
              </li>
            </ul>
            <div className="links">
              <HashLink smooth to="/login">Login</HashLink>
              <Link className="btn btn-primary" to="/signup">
                Registrarse
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div id="inicio" className="ghsty_s">
        <div className="card_p">
          <div className="card_h">
            <div data-aos="fade-up">
              <div>
                <h3>La seguridad de tu área privada en nuestras manos</h3>
                <p>
                  Con nuestro sistema de acceso y monitoreo, obtendrás la total
                  tranquilidad de tus zonas privadas.
                </p>
                <Link
                  to="/signup"
                  className="mt-4 py-3 px-5 btn btn-outline-success"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/TR0m2XY/imgHome.png" alt="" />
            </div>
          </div>
        </div>
        <div className="ghsty_s_l">
          <div id="introduccion">
            <div className="f_red">
              <span data-aos="fade-up">Introducción</span>
            </div>
            <div>
              <p className="mt-5">
                La seguridad en propiedades privadas es uno de los delitos que
                se están cometiendo más frecuentemente en el país, cuando
                hablamos de seguridad pensamos en sistemas que nos ayuden a
                cuidar nuestras propiedades de la delincuencia en el exterior.
                Por todo ello, desarrollaremos un sistema de monitoreo para
                accesos de entrada basado en alertas, monitoreo de forma remota,
                si llega a quedar una puerta o ventana abierta, al momento de
                activar la aplicación este le informara si todo está debidamente
                cerrado o hay alguna entrada abierta y poderla cerrar.
              </p>
              <img
                src="https://i.ibb.co/X3s58p6/search-house.png"
                alt="introduction"
              />
            </div>
          </div>
          <div id="objectivo">
            <div className="f_blank">
              <span data-aos="fade-up">Objetivos</span>
            </div>
            <div>
              <h4 className="mt-4">Objetivos Generales</h4>
              <p>
                Desarrollar un sistema de seguridad de accesos de entrada que
                permita monitorear y dar acceso de un área privada, para
                prevenir el ingreso a personas no autorizadas.
              </p>
              <h4 className="mt-4">Objetivos Especificos</h4>
              <p>
                Elaborar una aplicación que permita notificar si algún acceso
                está abierto y cerrarlo desde la misma.
              </p>
              <p>
                Desarrollar el circuito electrónico que permita monitorear en
                tiempo real el estado de los accesos.
              </p>
              <img src="https://i.ibb.co/3mfX0fx/goals.png" alt="objectives" />
            </div>
          </div>
          <div id="alcance">
            <div className="f_green">
              <span data-aos="fade-up">Alcance</span>
            </div>
            <div>
              <p>
                El proyecto nombrado <b>Windoor Segurity</b> está basado en una
                aplicación web y wifi para el sistema de seguridad de hogares y
                empresas que permite monitorear cada acceso de entrada,
                asignando sensores y circuitos dónde irán conectados a una
                aplicación móvil por internet donde el usuario podrá programar
                en qué horario activar la seguridad (distintos modos), la
                aplicación avisará cuando detecte una anomalidad en apertura de
                ventas o puertas, enviando notificaciones. También podrá estar
                dando un seguimiento al estado continuamente del área privada y
                con la ventaja de revisar desde distintos dispositivos móviles o
                escritorio para su control, el cliente podrá abrir los accesos
                desde la aplicación para el ingreso de personas autorizadas.
                Windoor Segurity contara con sensor RFID para activar o
                desactivar la seguridad desde el módulo central
              </p>
              <img src="https://i.ibb.co/HGwLcc6/scope.png" alt="scope" />
            </div>
          </div>
          <div id="participante">
            <div className="f_gray">
              <span data-aos="fade-up">Participantes</span>
            </div>
            <div>
              <p>Leidy Caterine Ariza Ballesteros</p>
              <p>Jorge Esneider Castro</p>
              <p>Cristian Steve Carrillo Soracipa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
              <Link to="/">
                <img src="https://i.ibb.co/z4bDXz8/Logo.jpg" alt="logo" />
                Windoor <span>Security</span>
              </Link>
            </div>
            <ul>
              <li>Inicio</li>
              <li>Objetivos</li>
              <li>Alcance</li>
            </ul>
            <div className="links">
              <Link to="/login">Login</Link>
              <Link className="btn btn-primary" to="/signup">
                Registrarse
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="ghsty_s">
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
          <div>
            <div className="f_red">
              <span data-aos="fade-up">Introducción</span>
            </div>
            <div>
              La seguridad en propiedades privadas es uno de los delitos que se
              están cometiendo más frecuentemente en el país, cuando hablamos de
              seguridad pensamos en sistemas que nos ayuden a cuidar nuestras
              propiedades de la delincuencia en el exterior. Por todo ello,
              desarrollaremos un sistema de monitoreo para accesos de entrada
              basado en alertas, monitoreo de forma remota, si llega a quedar
              una puerta o ventana abierta, al momento de activar la aplicación
              este le informara si todo está debidamente cerrado o hay alguna
              entrada abierta y poderla cerrar
            </div>
          </div>
          <div>
            <div className="f_blank">
              <span data-aos="fade-up">Objetivos</span>
            </div>
            <div>
              2.1.OBJETIVO GENERAL • Desarrollar un sistema de seguridad de
              accesos de entrada que permita monitorear y dar acceso de un área
              privada, para prevenir el ingreso a personas no autorizadas.
              2.2.OBJETIVOS ESPECIFICOS • Elaborar una aplicación que permita
              notificar si algún acceso está abierto y cerrarlo desde la misma.
              • Desarrollar el circuito electrónico que permita monitorear en
              tiempo real el estado de los accesos.
            </div>
          </div>
          <div>
            <div className="f_green">
              <span data-aos="fade-up">Alcance</span>
            </div>
            <div>
              El proyecto nombrado Windoor Segurity está basado en una
              aplicación web y wifi para el sistema de seguridad de hogares y
              empresas que permite monitorear cada acceso de entrada, asignando
              sensores y circuitos dónde irán conectados a una aplicación móvil
              por internet donde el usuario podrá programar en qué horario
              activar la seguridad (distintos modos), la aplicación avisará
              cuando detecte una anomalidad en apertura de ventas o puertas,
              enviando notificaciones. También podrá estar dando un seguimiento
              al estado continuamente del área privada y con la ventaja de
              revisar desde distintos dispositivos móviles o escritorio para su
              control, el cliente podrá abrir los accesos desde la aplicación
              para el ingreso de personas autorizadas. Windoor Segurity contara
              con sensor RFID para activar o desactivar la seguridad desde el
              módulo central
            </div>
          </div>
          <div>
            <div className="f_gray">
              <span data-aos="fade-up">Participantes</span>
            </div>
            <div>asdasd</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

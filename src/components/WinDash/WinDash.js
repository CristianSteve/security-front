import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TableList from "../TableList";
import Loader from "../Loader/Loader";
import PopUpEmpty from "../PopUpEmpty/PopUpEmpty";

import "./windash.scss";

export const WinDash = ({ module, data, loading = true, css, children }) => {
  const [show, setshow] = useState(false);
  return (
    <React.Fragment>
      <div className="title__primary">
        <h3>{module}</h3>
      </div>
      <div>
        <div className="row d-flex justify-content-end">
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder={`Buscar ${module}`}
              />
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <TableList data={data} css={css} />
            <div className="content__new">
              <button
                id="new__item"
                className="btn btn-primary"
                onClick={() => setshow(true)}
              >
                Crear {module}
              </button>
              <PopUpEmpty show={show} hide={setshow} module={module}>
                {children}
              </PopUpEmpty>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

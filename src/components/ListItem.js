import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #161526;
  color: #fff;
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid #fff;
`;

const Label = styled.div`
  span {
    color: ${(props) => (props.target.color ? "green" : "red")};
    margin-right: 1rem;
  }
`;

const Switch = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: sans-serif;

  .switch-button {
    background: rgba(255, 255, 255, 0.56);
    border-radius: 30px;
    overflow: hidden;
    width: 100px;
    text-align: center;
    font-size: 10px;
    letter-spacing: 1px;
    color: #fff;
    position: relative;
    padding-right: 50px;

    &:before {
      content: "Online";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
      color: #fff;
    }

    &-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
      color: #fff;

      &:checked + .switch-button-label:before {
        transform: translateX(50px);
        transition: transform 300ms linear;
        background: green;
      }

      & + .switch-button-label {
        position: relative;
        padding: 5px 0;
        display: block;
        user-select: none;
        pointer-events: none;

        &:before {
          content: "";
          background: #fff;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 30px;
          transform: translateX(0);
          transition: transform 300ms;
          background: red;
        }
        .switch-button-label-span {
          position: relative;
          color: #fff;
        }
      }
    }
  }
`;

const ListItem = ({item, handleCheck = () =>{}}) => {
    const itemRef = useRef({ status: false });
    const [status, setStatus] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setStatus(item.status);
        setData(item);
    }, [item])

    const handleChangeSwitch = (e) =>{
        const status = e.target.checked;
/*         const id = e.target.attributes[2].value; */
        setStatus(status);
        handleCheck({...data, status});
    }
  return (
    <List ref={itemRef}>
      <Label target={{ color: status }}>
        <span>
          <FontAwesomeIcon icon={status ? faCheck : faBan} />
        </span>
        {item.descripcion}
      </Label>
      <Switch>
        <div className="switch-button">
          <input
            className="switch-button-checkbox"
            type="checkbox"
            onChange={handleChangeSwitch}
            defaultChecked={item.status}
          />
          <label className="switch-button-label">
            <span className="switch-button-label-span">Offline</span>
          </label>
        </div>
      </Switch>
    </List>
  );
};

export default ListItem;

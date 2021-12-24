import React from "react";
import "./ModalBox.css";

function ModalBox(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        
        <div className="title">
          <h1>{props.property.title}</h1>
        </div>
        <div className="body">
          <p>co-ordinate : {props.property.coords}</p>
          <p>shape : {props.property.shape}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setOpenModal({...props.property,flag:false});
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalBox;
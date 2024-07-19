import React from "react";
function Modal({img, isOpen}){

    if(!isOpen) return null;
    console.log ("dasdasda");

    return(
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-3 rounded">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default Modal;
import React from "react";
import addNotification from "react-push-notification";

const ButtonPush = () =>{
    const notificacion =() =>{
        addNotification({
            title: 'Luis Fernando Rodriguez Osuna',
            message: 'Este es ejemplo de notificacion push',
            duration: 4000,
            native: true,
        });
    }
    return(
        <div className="col-12">
            <button onClick={notificacion} type="button" className="btn btn-primary">Notificacion</button>
        </div>
    );
};

export default ButtonPush;
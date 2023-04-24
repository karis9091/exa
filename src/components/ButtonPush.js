import React from "react";
import addNotification from "react-push-notification";

const ButtonPush = () =>{
    const notificacion =() =>{
        addNotification({
            title: 'Karina',
            message: 'Ejemplo',
            duration: 4000,
            native: true,
        });
    }
    return(
        <div className="col-12">
            <button onClick={notificacion} type="button" class="btn btn-outline-light">Enviar Notificacion</button>
                
        </div>
    );
};

export default ButtonPush;
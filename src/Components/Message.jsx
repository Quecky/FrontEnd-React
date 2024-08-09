import React from "react";

const Message = ({ customer }) => {
  return (
    <>
      <h4>Muchas gracias, {customer.name}!</h4>
      <h4>
        En 30 minutos estará llegando tu pedido a la dirección{" "}
        {customer.address}.
      
      </h4>
      <h4 style={{color:"yellow"}}>  Segun su edad: {customer.edad} y su pokemon favorito {customer.pokemon} sera entregado su regalo sorpresa</h4>
    </>
  );
};

export default Message;
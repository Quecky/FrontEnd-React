import React,{useState} from "react";
import Message from "./Message";

const Form= ()=>{
    //
    //estados, lo inicializamos con comillas vacias , nombre estado, funcion set para ponerle valor
    
    //const[name,setName]=useState("");
    //const[address,setAddress]=useState("");
    const[show,setShow]=useState(false);
    const[error,setError]=useState(false);
    //este es un objeto
    const [customer,setCustomer]=useState(
        {
            name:"",
            address:"",
            edad:0,
            pokemon:"",
        }

    );

    //una funcionl lo optimo es tener una sola funcion para todos los inputs
//el evento es segun la funcion que se ejecuta, onchange en este caso, en el boton de Ver evento
//lo estamos haciendo de forma mas directa
    const handleChangeName=(event)=>{
        //para obtener texto de un input
        setCustomer({...customer,name:event.target.value});
      //  console.log(event.target.value)
    }
    const handleChangeAddress=(event)=>{
        //esto renderiza
        setCustomer({...customer,address:event.target.value});
       // console.log(event.target.value)
    }

    const handleChangeEdad=(event)=>{
        //esto renderiza
        setCustomer({...customer,edad:event.target.value});
       // console.log(event.target.value)
    }

    const handleChangePokemon=(event)=>{
        //esto renderiza
        setCustomer({...customer,pokemon:event.target.value});
       // console.log(event.target.value)
    }

   

    const handleSubmit =()=>{
        event.preventDefault();
        const numRegex= /[0-9]/;
        console.log("regex",numRegex.test(customer.address))
        if(customer.name.trim().length>3 && numRegex.test(customer.name) && customer.address.includes(" ") && numRegex.test(customer.address) && customer.pokemon.trim().length>3 && numRegex.test(customer.pokemon) && customer.edad>0)
        {
              setShow(true);
              setError(false);
        }
        else{
            setError(true)
        }
      
    }

    const reset = () =>
    {
       setCustomer({
        name:"",
        address:"",
        edad:0,
        pokemon:"",
       });
    }
    return (
        <>

{
            show ? (
                <Message customer={customer} />
            ):null
        }
      
        <form onSubmit={handleSubmit}>

            <label >Nombre: </label>
            <input type="text" value={customer.name} onChange={handleChangeName}/>
            <label >Dirección: </label>
            <input type="text" value={customer.address} onChange={handleChangeAddress}/>
            <label >Edad: </label>
            <input type="text" value={customer.edad} onChange={handleChangeEdad}/>
            <label >Pokemon favorito: </label>
            <input type="text" value={customer.pokemon} onChange={handleChangePokemon}/>
            <button>Enviar</button>
        </form>
        <button onClick={(event)=>console.log(event)}>Ver evento</button>
        <button onClick={reset}>Reset form</button>
      
        {/**wow para comentar en el HTML */}
      
        {
            error ?(
                <>
                <h4 style={{color:"red"}}>Sus datos ingresados tienen errores</h4>
                 </>
            ):null
        }
       
       </>
    );

};

export default Form;
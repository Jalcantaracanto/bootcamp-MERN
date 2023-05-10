import React ,{ useEffect} from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //Se detecta cuando se monta
        alert("El componente está montado")
        return () =>{
            alert("Componente Desmontado")
        }
    },[])

    return (
    <div>
        <h3>Hemos superado los 20 cambios</h3>
        <button onClick={e => {
            alert("Bienvenido")
        }}>Mostrar Alerta</button>
    </div>
    )
}

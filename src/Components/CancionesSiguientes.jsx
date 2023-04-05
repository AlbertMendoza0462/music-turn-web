import React from "react"
import ListaCanciones from "./ListaCanciones"
import { peticionGet } from "./Api"
import Swal from "sweetalert2"

const CancionesSiguientes = () => {

    const [listaCanciones, setListaCanciones] = React.useState([])

    React.useEffect(() => {
        obtenerCanciones()
        setInterval(obtenerCanciones, 5000)
    }, [])


    const obtenerCanciones = () => {
        peticionGet("/canciones/cola")
            .then((res) => {
                if (res instanceof Array) {
                    setListaCanciones(res)
                } else {
                    if (res == null)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Ha habido un el servidor!'
                        })
                }
            })
    }

    return (
        <div>
            <ListaCanciones seleccionarPrimero titulo="Canciones Siguientes..." canciones={listaCanciones} />
        </div>
    )
}

export default CancionesSiguientes
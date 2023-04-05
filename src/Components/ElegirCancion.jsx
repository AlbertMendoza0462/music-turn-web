import React from "react"
import ListaCanciones from "./ListaCanciones"
import { peticionGet, peticionPost } from "./Api"
import Swal from 'sweetalert2'

const ElegirCancion = () => {

    const [listaCanciones, setListaCanciones] = React.useState([])
    const [intervalo, setIntervalo] = React.useState(0)

    React.useEffect(() => {
        obtenerCanciones()
        setIntervalo(setInterval(obtenerCanciones, 5000))
    }, [])

    React.useEffect(() => {
        if (listaCanciones.length > 0)
            clearInterval(intervalo)
    }, [listaCanciones])


    const obtenerCanciones = () => {
        peticionGet("/canciones")
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

    const seleccionarCancion = (canc) => {
        Swal.fire({
            title: 'Seguro que desea solicitar esta cancion?',
            text: canc.nombre,
            showCancelButton: true,
            confirmButtonText: 'Solicitar',
        }).then((result) => {
            if (result.isConfirmed) {
                peticionPost("/canciones/cola", canc)
                    .then((res) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Solicitado!',
                            timer: 1000,
                            showConfirmButton: false
                        })
                    })
                    .catch((res) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Ha habido un el servidor!'
                        })
                    })
            }
        })
    }

    return (
        <div>
            <ListaCanciones onClick={seleccionarCancion} titulo="Elija su Canción" canciones={listaCanciones} />
        </div>
    )
}

export default ElegirCancion
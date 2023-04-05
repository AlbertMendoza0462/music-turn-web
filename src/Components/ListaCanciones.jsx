import ItemLista from "./ItemLista"
import "./ListaCanciones.jsx.css"

const ListaCanciones = (props) => {
    return (
        <div className="contenedor">
            <h3>{props.titulo}</h3>
            <div className="lista">
                {props.canciones.map((item, key) => {
                    return (
                        <ItemLista key={key} item={item} seleccionarPrimero={(props.seleccionarPrimero && key == 0)} onClick={props.onClick ? props.onClick : undefined} />
                    )
                })}
            </div>
        </div>
    )
}

export default ListaCanciones
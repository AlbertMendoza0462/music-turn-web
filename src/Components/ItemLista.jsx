

const ItemLista = (props) => {
    return (
        <div
            className="item"
            onClick={props.onClick ? () => props.onClick(props.item) : undefined}
            style={(props.seleccionarPrimero) ? {backgroundColor: "#03DAC5"} : {}}>
            {props.item.nombre}
        </div>
    )
}

export default ItemLista
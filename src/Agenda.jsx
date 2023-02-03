import { useParams } from "react-router-dom"

function Agenda() {
    const { nome } = useParams()

    return (
        <h3>Agenda de {nome}</h3>
    )
}

export default Agenda
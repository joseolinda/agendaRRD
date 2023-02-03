import { Link, Outlet } from "react-router-dom"

function HomePage() {
    return (
        <>
            <h1>Agenda</h1>
            <form>
                <input type="text" />
                <input type="submit" value="Pesquisar" />
            </form>
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/calendario">Calendário</Link></li>
                    <li><Link to="/agenda/jose">Agenda</Link></li>
                    <li><Link to="/agenda/rodrigo">Agenda de Rodrigo</Link></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default HomePage
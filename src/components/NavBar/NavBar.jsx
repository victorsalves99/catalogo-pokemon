import "./NavBar.scss";

const NavBar = ({setBuscar}) => {
  return (
    <header className="header">
        <h2 className="title">Catalogo de Pokemons</h2>
        <input type="search" name="pesquisa" id="pesquisa"  placeholder="Pesquisa..." onChange={(ev) => setBuscar(ev.target.value)}/>
    </header>
  )
}

export default NavBar
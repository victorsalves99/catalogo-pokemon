// importe dos componentes
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import { useEffect, useState } from "react";
import Catalogo from "./components/Catalogo/Catalogo";
import Card from "./components/Card/Card";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [busca, setBusca] = useState();
  const [completo, setCompleto] = useState([]);

  const buscar = (valor) => {
    setBusca(valor);
    console.log(busca);
  };
  useEffect(() => {
    filtrar();
  }, [busca]);

  const filtrar = () => {
    if (busca) {
      setPokemon(() => {
        return completo.filter((item) => item.name.includes(busca))
      });

    } else if(!busca) {
        setPokemon(completo)
    }
    
  };

  async function handGet() {
    for (let c = 1; c <= 100; c++) {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${c}/`).then(
        (re) => re.json()
      );
      setPokemon((prev) => [...prev, res]);
      setCompleto((prev) => [...prev, res]);
    }
  }
  useEffect(() => {
    handGet();
  }, []);

  return (
    <>
      <NavBar setBuscar={buscar} />
      <h2 className="title">Pokemons</h2>
      <Catalogo>
        {pokemon &&
          pokemon.map(
            (item) =>
              item.id && (
                <Card
                  nome={item.name}
                  img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item.id}.gif`}
                  key={item.id}
                  tipo={item.types[0].type.name}
                />
              )
          )}
      </Catalogo>
    </>
  );
}

export default App;

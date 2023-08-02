import { useState, useEffect } from "react";
import Card from "./Card";

function Game() {
	const [allPokemon, setAllPokemon] = useState([]);

	useEffect(() => {
		async function fetchPokemon() {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151}");
			const data = await res.json();
			const keyedPokemon = [];
			data.results.forEach((pokemon) => {
				keyedPokemon.push({
					dexNum: data.results.indexOf(pokemon) + 1,
					name: pokemon.name,
				});
			});
			setAllPokemon(keyedPokemon);
		}

		fetchPokemon();
	}, []);
	return (
		<main className=" bg-slate-800 p-8 grid gap-6 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 justify-around ">
			{allPokemon.map((pokemon) => (
				<Card
					key={pokemon.name}
					name={pokemon.name}
					dexNum={pokemon.dexNum}
					imgURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.dexNum}.png`}
				/>
			))}
		</main>
	);
}
export default Game;
